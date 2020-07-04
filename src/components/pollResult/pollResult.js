import React from 'react'
import {Card, Button, ProgressBar} from 'react-bootstrap'
import siteConstant from '../../constant.json'

export default function PollResult(props){
    const pollResultDetails = props.pollResultDetails
    const pollResult = pollResultDetails.pollResult
    const totalVote = getTotalVote(pollResult)

    let styles = {
        margin: '20px',
        width: '250px',
        backgroundColor: '#FFDAB9',
        float: 'left'
      };

    return (
        <Card style={styles}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{pollResultDetails.pollTitle}</Card.Title>
                <Card.Text>Total Votes: {totalVote}</Card.Text>
                    {
                        pollResult.map((eachContender, idx)=>{
                            return(
                                <div>
                                    {eachContender.contender}
                                    <ProgressBar 
                                        variant={siteConstant.variant[idx]}
                                        now={(eachContender.votes * 100/totalVote)}
                                        label={`${eachContender.votes}`} />
                                </div>
                            )
                        })
                    }                                    
            </Card.Body>
        </Card>
    )
}


function getTotalVote(pollResult) {
    let totalVote = 0
    for (let i=0; i < pollResult.length; i++){
        totalVote += pollResult[i].votes
    }
    return totalVote
}