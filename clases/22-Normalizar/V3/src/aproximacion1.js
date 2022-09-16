import fs from 'fs';
import path from 'path';
import { normalize, schema } from 'normalizr';
import {__dirname} from './utils.js';


const inputPath = __dirname + '/data/input.json';

export const original = async (req, res) => {

    const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
    res.json({
        original: data
    })
}


export const intento1 = async (req, res) => {
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

    const user = new schema.Entity('users');

    const comment = new schema.Entity('comments', {
            commenter: user,
    });

    const article = new schema.Entity('articles', {
            author: user,
            comments: [comment],
    });

    const finalSchema = [article]
    const normalizedData = normalize(data, finalSchema);
    console.log(JSON.stringify( normalizedData,null,'\t'))
    res.json({
        normalizedData
    })
};


export const intento2 = async (req, res) => {
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

    const user = new schema.Entity('users', {}, {
        idAttribute: '_id'
    });

    const comment = new schema.Entity('comments', {
        commenter: user,
    });

    const article = new schema.Entity('articles', {
        author: user,
        comments: [comment],
    });

    const normalizedData = normalize(data, [article]);
    console.log(JSON.stringify( normalizedData,null,'\t'))
    res.json({
        normalizedData
    })
};