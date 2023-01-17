// fonction pour générer un choix aléatoire pour l'ordinateur
function computerPlay() {
    var choice = Math.random();
    if (choice < 0.34) {
      return "pierre";
    } else if (choice <= 0.67) {
      return "papier";
    } else {
      return "ciseaux";
    }
  }
  
  // fonction pour déterminer le gagnant d'un tour
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "égalité";
    } else if (playerSelection === "pierre") {
      if (computerSelection === "ciseaux") {
        return "joueur gagne";
      } else {
        return "ordinateur gagne";
      }
    } else if (playerSelection === "papier") {
      if (computerSelection === "pierre") {
        return "joueur gagne";
      } else {
        return "ordinateur gagne";
      }
    } else if (playerSelection === "ciseaux") {
      if (computerSelection === "papier") {
        return "joueur gagne";
      } else {
        return "ordinateur gagne";
      }
    }
  }
  
  // fonction pour afficher les résultats dans le canvas HTML5
  function showResults(winner) {
    // récupérer le canvas et son contexte
    var canvas = document.getElementById("resultsCanvas");
    var ctx = canvas.getContext("2d");
  
    // dessiner le résultat en utilisant le contexte du canvas
    ctx.font = "18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(winner, canvas.width / 2, canvas.height / 2);
  }
  
  // demander au joueur de choisir une option (pierre, papier ou ciseaux)
  var playerSelection = prompt("Choisissez pierre, papier ou ciseaux :");
  
  // jouer un tour en utilisant les fonctions définies ci-dessus
  var computerSelection = computerPlay();
  var winner = playRound(playerSelection, computerSelection);
  
  // afficher le résultat à l'aide de la fonction showResults
  showResults("Le choix de l'ordinateur était : " + computerSelection + ". Résultat : " + winner);
  