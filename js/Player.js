class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      //Programe que... Se o index do jogador for igual a 1
      if (???) {
        this.positionX = width / 2 - 100;
      } else {
        //Na linha acima, você está defininco a posição no eixo x a esquerda
        //faça o mesmo para a posição direita
        ???
      }
  
      //Utilize o código que referencia o database
      //Utilize o código que adiciona um conteúdo ao firebase
      ???(playerIndex).???({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY
      });
    }
  
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
  
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
    }
  }
  
