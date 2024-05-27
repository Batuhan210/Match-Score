function incrementUnitedScore() {
    const unitedScore = document.getElementById('united-score');
    let currentScore = parseInt(unitedScore.innerHTML);
    unitedScore.innerHTML = ++currentScore;
    }

function decrementUnitedScore() {
    const unitedScore = document.getElementById('united-score');
    let currentScore = parseInt(unitedScore.innerHTML);
    if(currentScore > 0 ) {
        unitedScore.innerHTML = --currentScore;        
            }
    else {
        alert("Maç skoru 0'dan küçük olamaz!");
        }
    }

function incrementLivScore() {
    const livScore = document.getElementById('liverpool-score');
    let currentScore = parseInt(livScore.innerHTML);
    livScore.innerHTML = ++currentScore;
   
}

function decrementLivScore() {
    const liveScore = document.getElementById('liverpool-score');
    let currentScore = parseInt(liveScore.innerHTML);
    if(currentScore > 0) {
        liveScore.innerHTML = --currentScore;
        }
    else{
        alert("Maç skoru 0'dan küçük olamaz!");
        }
    }

function unitedResetScore() {
    const resetScore = document.getElementById('united-score');
    resetScore.innerHTML = 0;
    }

function livResetScore() {
    const resetScore = document.getElementById('liverpool-score');
    resetScore.innerHTML = 0;
    }