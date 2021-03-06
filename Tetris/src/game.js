export default class Game {
		score = 0;
		lines = 0;
		level = 0;
		playField = [
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0]
		];

		activePiece = {
		x: 0,
		y: 0,
		blocks: [
			[0,1,0],
			[1,1,1],
			[0,0,0],
		]
		}

		movePieceLeft() {
			this.activePiece.x -=1;
			if (this.isPieceOutOfBounds()) { this.activePiece.x += 1;}
		}
		movePieceRight() {
			this.activePiece.x +=1;
			if (this.isPieceOutOfBounds()) { this.activePiece.x -= 1;}
		}
		movePieceDown() {
			this.activePiece.y +=1;
			if (this.isPieceOutOfBounds()) { this.activePiece.y -= 1;}
			this.lockPiece();
		}
		isPieceOutOfBounds() {
			const {y, x} = this.activePiece; ///ВТОРОЙ УРОК УДАЛЕНИЕ ЭТОГО УЧАСТКА КОДА 17:07 PAUSED
			const playField = this.playField; ///ВТОРОЙ УРОК УДАЛЕНИЕ ЭТОГО УЧАСТКА КОДА 17:07 PAUSED
			return playField[y] === undefined || playField[y][x] === undefined;
		}

		lockPiece () {
			const { y: pieceY, x: pieceX, blocks } = this.activePiece;
			
			for (let y = 0; y < blocks.length; y++) {
				for (let x = 0; x < blocks[y].length; x++) {
					this.playField[pieceY + y][pieceX + x] = blocks[y][x];
				}
			}
		}
}