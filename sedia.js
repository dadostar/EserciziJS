var gambe = SIMPLEX_GRID([[-0.3,0.05,-0.4,0.05],[-0.3,0.05,-0.4,0.05],[0.45]]);

var telaio1 = SIMPLEX_GRID([[-0.3,0.5],[-0.3,0.05,-0.4,0.05],[-0.45,0.02]]);

var telaio2 = SIMPLEX_GRID([[-0.3,0.05,-0.4,0.05],[-0.35,0.4,-0.05],[-0.45,0.02]]);

var schienale1 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,0.05,-0.4,0.05],[-0.47,0.45]]);

var schienale2 = SIMPLEX_GRID([[-0.3,0.05],[-0.3,0.5],[-0.47-0.45,0.02]]);

var telaio = STRUCT([gambe,telaio2,telaio1,schienale1,schienale2]);

DRAW(telaio);