##Tournament structure:

```json
tournament: {
    participants: [
        player, ...
    ]

    groups: [
        {
            title: "Semi-final",
            matches: [
                {
                    id: 52,
                    player1: 'sample_player',
                    player2: '#32#win',
                    winner: 1 
                },
                {
                    id: 53,
                    player1: '#32#lose',
                    player2: '#33#lose',
                    winner: 0
                },
                ...
            ]
        },
        ...
    ]
}
```

##Functions

- addGroup(title) => addGroup('abc')
- getGroup(group_index) => getGroup(1)

- addMatch(group_index, match) => addMatch(1, {id: 789, player1: 'sample_player', player2: '#32#win', winner: 1})
- removeMatch(match_id) => removeMatchById(53)
- removeMatch(group_index, match_index) => removeMatch(0,0)
- updateMatch(match_id, match) => updateMatchById(123,{player1: 'changed123', id: 52})
- updateMatch(group_index, match_index, match) => updateMatchById(123,{player1: 'changed123', id: 52})
- getMatch(match_id) => getMatchById(52)
- getMatch(group_index, match_index) => getMatch(0,10)

- addPlayer(player) => addPlayer('123')
- addPlayer(players) => addPlayers(['124','128'])
- removePlayer(player) => removePlayerById('124')
- removePlayer(player_index) => removePlayer(0)

- html()
- js()

