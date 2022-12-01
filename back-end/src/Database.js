//const express = require('express');
//const app = express();
import { config } from 'dotenv';
import e from 'express';
import { MongoClient } from 'mongodb';

export async function connecToCluster(uri)
{
    try{
        const client = new MongoClient(uri);
        console.log('Connecting to cluster');
        await client.connect();
        console.log("Connected to Cluster");
        return client;
    } catch(error)
    {
        console.error('Connection to Cluster Failed', error);
        process.exit();
    }
}

export async function executeDatabaseUserpOerations(operation, name, password, email)
{
    config();
    const uri = process.env.DB_URI;
    console.log(uri);
    let client;
    try {
        client = await connecToCluster(uri);
        const db = client.db('SecureMessagingApp');
        const collection = db.collection('users');
        console.log("Collection: users");

        switch (operation)
        {
            case 'CREATE':
                const userExists = await findUserByName(collection, name);
                if (userExists.length != 0)
                {
                    console.log("User Already Exists");
                    const status = "Username already exists";
                    return status;
                }
                else
                {
                    await createUser(collection, name, password, email);
                    console.log('Created User');
                    const status = "User Created";
                    return status;
                }
                
            case 'SEARCH':
                const user = await findUserByName(collection, name);
                if (user != [])
                {
                    const status = true;
                    console.log("User Found");
                    return status;
                }
                else
                {
                    const status = false;
                    console.log("User Not Found");
                    return status;
                }

            case 'GETUSER':
                const userInfo = await findUserByName(collection, name);
                if (userInfo != [])
                {
                    console.log("User Found");
                    return userInfo;
                }
                else
                {
                    console.log("User Not Found");
                    return null;
                }
            case 'DELETE':
                await deleteUserByName(collection, name);
                const deleteStatus = await findUserByName(collection, name);

                if (deleteStatus == [])
                {
                    const status = "User Deleted";
                    console.log(status);
                    return status;
                }
                else
                {
                    const status = "User Not Deleted";
                    console.log(status);
                    return status;
                }

        }
    } finally {
        await client.close();
    }
}

export async function executeDatabaseMessagespOerations(operation, username, recipientName, message, id)
{
    config();
    const uri = process.env.DB_URI;
    console.log(uri);
    let client;
    try {
        client = await connecToCluster(uri);
        const db = client.db('SecureMessagingApp');
        const collection = db.collection('messages');
        console.log("Collection: messages");

        switch (operation)
        {
            case 'CREATE':
                await createMessage(collection, message, username, recipientName, id);
                console.log("Message sent to: " + recipientName);
                break;

                
            case 'GETMESSAGES':
               const newMessages = await getNewMessages(collection, recipientName, id);
               console.log("Retrieved new messages");
               return newMessages;
            
            case 'CLEAR':
                await clearMessages(collection);
                break;
        }
    } finally {
        await client.close();
    }
}

export async function createMessage(collection, message, senderName, recipientName, id) 
{
    //const date = new Date();
    id += 1;
    const document = {
        _id: id,
        senderName: senderName,
        recipientName: recipientName,
        message: message,
    };

    await collection.insertOne(document);
}

export async function getNewMessages(collection, name, id)
{
    return collection.find({
        recipientName: name,
        _id: {$gt: id},
        
    }).toArray();
}

export async function clearMessages(collection)
{
    await collection.deleteMany({});
}
export async function createUser(collection, name, password, email)
{
    const date = new Date();
    const document = {
        _id: date,
        name: name,
        password: password,
        email: email,
    };
    await collection.insertOne(document);
}
export async function findUserByName(collection, name)
{
    return collection.find({ name }).toArray();
}

export async function updateDocumentByName(collection, name, updatedFields)
{
    await collection.updateOne(
        { name },
        { $set: updatedFields}
    );
}

export async function deleteUserByName(collection, name)
{
    await collection.deleteMany({ name });
}