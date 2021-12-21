const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { getAllTeams, getTeamById, saveNewTeam } = require('../../controllers/teams')
const { response } = require('express')
const { teamsList, singleTeam, newTeam, postedTeam } = require('../mocks/teams.mock')

chai.use(sinonChai)
const { expect } = chai


describe('getAllTeams', () => {
  it('retrives a list of teams from database and calls response.send() with the list', async () => {
    const stubbedFindAll = sinon.stub(models.Teams, 'findAll').returns(teamsList)
    const stubbedSend = sinon.stub()
    const response = { send: stubbedSend }

    await getAllTeams({}, response)

    expect(stubbedFindAll).to.have.callCount(1) // because we use it once in line 21
    expect(stubbedSend).to.have.been.calledWith(teamsList)
  })
})

describe('getTeamById', () => {
  it('retrieves the team associtaed with the provided ID from database, and calls response.send with it', async () => {
    const request = { params: { id: '11' } }
    const stubbedFindOne = sinon.stub(models.Teams, 'findOne').returns(singleTeam)
    const stubbedSend = sinon.stub()
    const response = { send: stubbedSend }

    await getTeamById(request, response)
    expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '11' } })
    expect(stubbedSend).to.have.been.calledWith(singleTeam)
  })
})

describe('saveNewTeam', () => {
  it('accepts new team details and saves them as a new team, returning the saved record with a 201 status', async () => {
    const request = { body: postedTeam }
    const stubbedSend = sinon.stub()
    const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
    const response = { status: stubbedStatus }
    const stubbeddCreate = sinon.stub(models.Teams, 'create').returns(newTeam)

    await saveNewTeam(request, response)

    expect(stubbeddCreate).to.have.been.calledWith(postedTeam)
    expect(stubbedStatus).to.have.been.calledWith(201)
    expect(stubbedSend).to.have.been.calledWith(newTeam)
  })
})
