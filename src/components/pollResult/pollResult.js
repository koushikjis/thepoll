import React from 'react'
import { getSinglePollResult } from '../../model/poll/index'
import {Card, Button, ProgressBar} from 'react-bootstrap'

export default function PollResult(props){
    const id = props.id
    const pollResultDetails = getSinglePollResult(id)
    const pollResult = pollResultDetails.pollResult
    let totalVote = 0
    for (const key in pollResult) {
        if (pollResult.hasOwnProperty(key)) {
            totalVote += pollResult[key];
            
        }
    }
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{pollResultDetails.pollTitle}</Card.Title>
                <Card.Text>Total Votes: {totalVote}</Card.Text>
                <Card.Text>
                    
                        <ProgressBar variant="success" now={pollResult.Arg * (100/totalVote)} />
                        <ProgressBar variant="info" now={pollResult.Bra * (100/totalVote)} />
                        <ProgressBar variant="warning" now={pollResult.Ger * (100/totalVote)} />
                        <ProgressBar variant="danger" now={pollResult.Spa * (100/totalVote)} />
                    
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
