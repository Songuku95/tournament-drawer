##Tournament structure:

```json
tournament: {
    participants: [
        player, ...
    ]

    group: [
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

- addMatch(group_index, match)
- removeMatch(match_id)
- removeMatch(group_index, match_index)
- updateMatch(match_id, match)
- updateMatch(group_index, match_index, match)
- getMatch(match_id)
- getMatch(group_index, match_index)

- addPlayer(player)
- addPlayer(players)
- removePlayer(player)
- removePlayer(player_index)

- html()
- js()

