# Rock Paper Scissors API
## A Build Circle API Project

### How to run:

- Navigate to the root folder and install dependencies with `npm install`
- Begin a new game by calling the `/start` endpoint with a difficulty like so: `/start/<EASY, HARD>`
- Using the returned UUID, you may now send your move ***in capital letters*** to the server using the following format: `/game/<UUID>/<MOVE>`
- To check your score at any time, use the `/score/<UUID>` endpoint. 
- The `BOMB` move can be used once 5 moves have been made. Using the bomb move instantly wins the game.

### List of API Endpoints:

| ENDPOINT | PARAMETER(S) |
| --------- | --------- |
| `/start` | `/<EASY, HARD>` |
| `/score` | `/<UUID>` |
| `/game` | `/<UUID>/<MOVE>` |

### Example Responses:


- `/start/EASY` \
{ \
"id": "2784183b-4a96-4068-9149-0f197a94115e", \
"score": 0,\
"move": 0,\
"difficulty": "EASY" \
}
- `/game/2784183b-4a96-4068-9149-0f197a94115e/ROCK` \
{ \
"id": "2784183b-4a96-4068-9149-0f197a94115e", \
"score": 0, \
"move": 1, \
"difficulty": "EASY", \
"lastGame": { \
"result": "LOSE", \
"yourMove": "ROCK", \
"computerMove": "PAPER" \
} \
}

- `/score/2784183b-4a96-4068-9149-0f197a94115e` \
{ \
"id": "2784183b-4a96-4068-9149-0f197a94115e", \
"score": 0, \
"move": 1, \
"difficulty": "EASY" \
}
