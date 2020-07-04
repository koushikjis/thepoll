export function getSinglePollResult(id){
    // Mock Result ...Original Data should come from API Call
    const mockdata = {
                        "2001":{
                            id: "2001",
                            pollTitle: "Who wins the FIFA WC 2022",
                            pollResult: [{contender:"Arg", votes:2000}, {contender:"Bra", votes:3230}, {contender:"Ger", votes:3400}, {contender:"Spa", votes:1878}],
                            dateStarted: "06/06/2020 18:50:00",
                            dateEnded: "25/06/2020 12:05:22",
                            pollStartedBy: "ui000981"
                        },
                        "52241":{
                            id: "52241",
                            pollTitle: "Canon or Nikon",
                            pollResult: [{contender:"Nikon", votes:252114}, {contender:"Canon", votes:358545}],
                            dateStarted: "06/06/2020 18:50:00",
                            dateEnded: "25/06/2020 12:05:22",
                            pollStartedBy: "ui000981"
                        }
                    }

    return mockdata[id]
}
