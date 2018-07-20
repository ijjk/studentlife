#!/usr/bin/env node
/* eslint-disable no-console */
const url = require('url')
const conf = require('./config/default.json').mongodb
const dbName = url.parse(conf).path.substr(1)
const { MongoClient, ObjectId } = require('mongodb')

const data = {
  pages: [
    {
      _id: ObjectId('5ac287acd97dcd5cbd6de69c'),
      name: 'home',
      default: true,
    },
    {
      _id: ObjectId('5ac28788d97dcd5cbd6de69b'),
      name: 'News',
      default: true,
      modsOnly: true,
      desc: 'A page to get updated on all the latest news.',
    },
  ],

  'page-thumbs': [
    {
      _id: ObjectId('5ac28788d97dcd5cbd6de69b'),
      file: 'news.png',
    },
  ],

  resources: [
    {
      label: 'Math',
      link: 'https://edu.symbaloo.com/embed/math453',
    },
    {
      label: 'Art',
      link: 'https://edu.symbaloo.com/embed/art45',
    },
    {
      label: 'Science',
      link: 'https://edu.symbaloo.com/embed/science301',
    },
    {
      label: 'Student',
      link: 'https://edu.symbaloo.com/embed/student14',
    },
    {
      label: 'Health & P.E.',
      link: 'https://edu.symbaloo.com/embed/healthandpe3',
    },
    {
      label: 'Social Studies',
      link: 'https://edu.symbaloo.com/embed/socialstudies199',
    },
    {
      label: 'English',
      link: 'https://edu.symbaloo.com/embed/english135',
    },
    {
      label: 'Business',
      link: 'https://edu.symbaloo.com/embed/business23',
    },
    {
      label: 'Technology',
      link: 'https://edu.symbaloo.com/embed/technology146',
    },
    {
      label: 'Foreign Language',
      link: 'https://edu.symbaloo.com/embed/foreignlanguage9',
    },
    {
      label: 'Special Education',
      link: 'https://edu.symbaloo.com/embed/specialed7',
    },
  ],
}
const collections = Object.keys(data)
const numCols = collections.length

const handleErr = err => {
  console.error(err)
  process.exit(1)
}
;(async function init() {
  const client = await MongoClient.connect(conf).catch(handleErr)
  let db
  // For mongodb <= 2.2
  if (client.collection) {
    db = client
  } else {
    db = client.db(dbName)
  }

  await new Promise((resolve, reject) => {
    let checked = 0
    collections.forEach(c => {
      db.collection(c)
        .count()
        .then(num => {
          if (num > 0) {
            return reject(new Error(`${c} is not empty, aborting...`))
          }
          checked += 1
          if (checked === numCols) resolve()
        })
        .catch(reject)
    })
  }).catch(handleErr)

  console.log('Collections are empty, inserting data...')
  await new Promise((resolve, reject) => {
    let added = 0
    collections.forEach(c => {
      const items = data[c]
      const col = db.collection(c)
      items.forEach(item => col.insert(item).catch(reject))
      added += 1
      if (added === numCols) resolve()
    })
  }).catch(handleErr)

  await client.close()
  console.log('Initial data inserted!')
})()
