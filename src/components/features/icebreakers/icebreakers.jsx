import React, { useState, useEffect } from 'react';
import "./icebreakers.css";
import { Client, Databases, Query } from 'appwrite';

const Icebreakers = () => {
    // Initialize Appwrite client
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(import.meta.env.VITE_PROJECT_ID);

    const databases = new Databases(client);

    const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
    const COLLECTION_ID = import.meta.env.VITE_ICEBREAKERS_COLLECTION_ID;

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to get random numbers
    const getRandomNumbers = (min, max, count) => {
        const numbers = new Set();
        while (numbers.size < count) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(randomNum);
        }
        return Array.from(numbers);
    };

    // Fetch random questions
    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.orderDesc('QuestionID'), Query.limit(1)]
            );

            if (!response.documents.length) throw new Error('No questions found');

            const maxQuestionID = response.documents[0].QuestionID;
            const randomIDs = getRandomNumbers(1, maxQuestionID, 5);

            const questionPromises = randomIDs.map(id =>
                databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
                    Query.equal('QuestionID', id),
                    Query.limit(1)
                ])
            );

            const results = await Promise.all(questionPromises);
            const newQuestions = results.flatMap(res => res.documents);

            setQuestions(newQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
            setQuestions([]);
        } finally {
            setLoading(false);
        }
    };

    // Load questions when component mounts
    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div className="container">
            <header>
                <h1>Icebreaker Question Generator</h1>
            </header>

            <main>
                {loading ? (
                    <div className="loading">Loading questions...</div>
                ) : (
                    <ul className="questions-list">
                        {questions.length > 0 ? (
                            questions.map((q, index) => (
                                <li key={index}>{q.text || q.question}</li>
                            ))
                        ) : (
                            <li>No questions available. Try again!</li>
                        )}
                    </ul>
                )}
                <button onClick={fetchQuestions} className="refresh-button">
                    Get New Questions
                </button>
            </main>

            <footer>
                <p>Powered by AppWrite</p>
            </footer>
        </div>
    );
};

export default Icebreakers;



// import React from 'react'
// import "./icebreakers.css"
// import { Client, Databases, Query } from 'appwrite';

// const Icebreakers = () => {
//     // Initialize the Appwrite client
//     const client = new Client()
//         .setEndpoint('https://cloud.appwrite.io/v1')
//         .setProject('67b157e600336980e6ee');
    
//     const databases = new Databases(client);
    
//     // Database and collection IDs
//     const DATABASE_ID = '67b1582900033fb8f3b0';
//     const COLLECTION_ID = '67b1585b0038a4c4e142';
    
//     // Function to get random numbers between min and max (inclusive)
//     function getRandomNumbers(min, max, count) {
//         const numbers = new Set();
//         while (numbers.size < count) {
//             const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//             numbers.add(randomNum);
//         }
//         return Array.from(numbers);
//     }
    
//     // Function to get 5 random icebreaker questions
//     async function getRandomQuestions() {
//         try {
//             const response = await databases.listDocuments(
//                 DATABASE_ID,
//                 COLLECTION_ID,
//                 [
//                     Query.orderDesc('QuestionID'),
//                     Query.limit(1)
//                 ]
//             );
    
//             if (!response.documents.length) {
//                 throw new Error('No questions found in the database');
//             }
    
//             const maxQuestionID = response.documents[0].QuestionID;
    
//             const randomIDs = getRandomNumbers(1, maxQuestionID, 5);
    
//             const questions = [];
    
//             for (const id of randomIDs) {
//                 const questionResponse = await databases.listDocuments(
//                     DATABASE_ID,
//                     COLLECTION_ID,
//                     [
//                         Query.equal('QuestionID', id),
//                         Query.limit(1)
//                     ]
//                 );
    
//                 if (questionResponse.documents.length > 0) {
//                     questions.push(questionResponse.documents[0]);
//                 }
//             }
    
//             return questions;
    
//         } catch (error) {
//             console.error('Error fetching random questions:', error);
//             throw error;
//         }
//     }
    
//     // Function to display the questions on the page
//     async function displayRandomQuestions() {
//         const questionsList = document.getElementById('questions-list');
//         const loadingElement = document.getElementById('loading');
    
//         try {
//             loadingElement.style.display = 'block';
//             questionsList.innerHTML = '';
    
//             const questions = await getRandomQuestions();
    
//             loadingElement.style.display = 'none';
    
//             if (questions.length === 0) {
//                 questionsList.innerHTML = '<li class="error">No questions found</li>';
//                 return;
//             }
    
//             questions.forEach(question => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${question.text || question.question}`; // Handle both 'text' and 'question' fields
//                 questionsList.appendChild(listItem);
//             });
//         } catch (error) {
//             loadingElement.style.display = 'none';
//             questionsList.innerHTML = `<li class="error">Failed to load questions: ${error.message}</li>`;
//         }
//     }
    
//     // Add event listener for the refresh button
//     document.addEventListener('DOMContentLoaded', () => {
//         const questionsList = document.getElementById('questions-list');
//         const refreshButton = document.getElementById('refresh-button');
//         const loadingElement = document.getElementById('loading'); // Get the loading element
    
//         // Set initial state
//         questionsList.innerHTML = '<li>Click the button to load some coffee chat ice breaker questions!</li>';
//         loadingElement.style.display = 'none'; // Hide loading initially
    
//         refreshButton.addEventListener('click', displayRandomQuestions);
//     });


//     return (
//         <div className="container">
//             <header>
//                 <h1>Icebreaker Question Generator</h1>
//             </header>
            
//             <main>
//                 <div id="loading" className="loading">Loading questions...</div>
//                 <ul id="questions-list" className="questions-list"></ul>
//                 <button id="refresh-button" className="refresh-button">Get New Questions</button>
//             </main>
            
//             <footer>
//                 <p>Powered by AppWrite</p>
//             </footer>
//         </div>
//     )
// }

// export default Icebreakers