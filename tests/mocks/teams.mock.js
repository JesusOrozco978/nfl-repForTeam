const teamsList = [{
  id: 1,
  location: 'Buffalo',
  mascot: 'Bills',
  abbreviation: 'BUF',
  conference: 'AFC',
  division: 'East'
}, {
  id: 2,
  location: 'Miami',
  mascot: 'Dolphins',
  abbreviation: 'MIA',
  conference: 'AFC',
  division: 'East'
}]

const singleTeam = [{
  id: 11,
  location: 'Jacksonville',
  mascot: 'Jaguars',
  abbreviation: 'JAX',
  conference: 'AFC',
  division: 'North'
}]
const newTeam = {
  id: 1,
  location: 'Buffalo',
  mascot: 'Bills',
  abbreviation: 'BUF',
  conference: 'AFC',
  division: 'East'
}
const postedTeam = {
  location: 'Buffalo',
  mascot: 'Bills',
  abbreviation: 'BUF',
  conference: 'AFC',
  division: 'East'
}

module.exports = { teamsList, singleTeam, newTeam, postedTeam }
