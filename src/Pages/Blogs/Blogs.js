import React from 'react';

const Blogs = () => {
    document.title = "Blogs";
    return (
        <div className='grid md:grid-cols-2 place-content-center gap-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-fuchsia-700'>Difference between SQL and NoSQL</p>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-fuchsia-700'>What is JWT, and how does it work?</p>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-fuchsia-700'>What is the difference between javascript and NodeJS?</p>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. But there is a significant difference between Node. JS and Javascript. JavaScript (abbreviated as JS) is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl font-bold text-fuchsia-700'>How does NodeJS handle multiple requests at the same time?</p>
                    <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;