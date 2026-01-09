class GraphPlotter {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.isActive = false;
        this.points = []; // {x, y} (論理座標)
        this.gridSize = 40; // 1目盛りのピクセル数
        this.origin = { x: canvas.width / 2, y: canvas.height / 2 };
    }

    activate() {
        this.isActive = true;
        this.origin = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.drawGrid();
        this.drawPointsAndLines();
        document.getElementById('graph-guide').style.display = 'block';
    }

    deactivate() {
        this.isActive = false;
        document.getElementById('graph-guide').style.display = 'none';
    }

    reset() {
        this.points = [];
        // グリッドは消さない方が良い？ -> deactivateされたら消えるべきか
        // ページロード時にデータがない場合呼ばれる
    }

    saveData() {
        return {
            points: [...this.points],
            isActive: this.isActive
        };
    }

    loadData(data) {
        if (!data) return;
        this.points = data.points || [];
        // isActiveの状態も復元するか？
        // ページ切り替え時にモードが変わるのは違和感あるので、
        // モード自体はGlobalな state で管理し、データだけロードする方が良いかもしれない
        // ここでは再描画のみ行う
        if (this.isActive) {
            this.drawGrid();
            this.drawPointsAndLines();
        }
    }

    handleTap(x, y) {
        if (!this.isActive) return false;

        // スナップ
        const logical = this.toLogical(x, y);
        const snapped = {
            x: Math.round(logical.x),
            y: Math.round(logical.y)
        };

        // 範囲チェック (例: -10 ~ 10)
        if (Math.abs(snapped.x) > 15 || Math.abs(snapped.y) > 15) return false;

        // 既存の点に近いかチェック -> 削除
        const existingIndex = this.points.findIndex(p => p.x === snapped.x && p.y === snapped.y);

        if (existingIndex >= 0) {
            this.points.splice(existingIndex, 1);
        } else {
            this.points.push(snapped);
        }

        // 再描画
        this.drawGrid();
        this.drawPointsAndLines();

        return true; // 処理したのでペンの描画をキャンセルさせる
    }

    drawGrid() {
        const { width, height } = this.canvas;
        const ox = this.origin.x;
        const oy = this.origin.y;
        const gs = this.gridSize;

        const gCtx = this.ctx;
        gCtx.save();
        gCtx.beginPath();

        // 背景白
        gCtx.fillStyle = '#ffffff';
        gCtx.fillRect(0, 0, width, height);

        gCtx.strokeStyle = '#e0e0e0';
        gCtx.lineWidth = 1;

        // 縦線
        for (let x = ox % gs; x < width; x += gs) {
            gCtx.moveTo(x, 0);
            gCtx.lineTo(x, height);
        }
        // 横線
        for (let y = oy % gs; y < height; y += gs) {
            gCtx.moveTo(0, y);
            gCtx.lineTo(width, y);
        }
        gCtx.stroke();

        // 軸
        gCtx.beginPath();
        gCtx.strokeStyle = '#888';
        gCtx.lineWidth = 2;
        gCtx.moveTo(0, oy);
        gCtx.lineTo(width, oy); // X軸
        gCtx.moveTo(ox, 0);
        gCtx.lineTo(ox, height); // Y軸
        gCtx.stroke();

        gCtx.restore();
    }

    drawPointsAndLines() {
        if (this.points.length === 0) return;

        // X座標でソート
        const sortedPoints = [...this.points].sort((a, b) => a.x - b.x);

        const gCtx = this.ctx;
        gCtx.save();

        // 線
        gCtx.beginPath();
        gCtx.strokeStyle = '#007bff';
        gCtx.lineWidth = 3;

        const start = this.toPhysical(sortedPoints[0].x, sortedPoints[0].y);
        gCtx.moveTo(start.x, start.y);

        for (let i = 1; i < sortedPoints.length; i++) {
            const p = this.toPhysical(sortedPoints[i].x, sortedPoints[i].y);
            gCtx.lineTo(p.x, p.y);
        }
        gCtx.stroke();

        // 点
        gCtx.fillStyle = '#ff0000';
        for (let p of sortedPoints) {
            const phys = this.toPhysical(p.x, p.y);
            gCtx.beginPath();
            gCtx.arc(phys.x, phys.y, 5, 0, Math.PI * 2);
            gCtx.fill();
        }

        gCtx.restore();
    }

    toLogical(px, py) {
        return {
            x: (px - this.origin.x) / this.gridSize,
            y: -(py - this.origin.y) / this.gridSize // Yは上が正
        };
    }

    toPhysical(lx, ly) {
        return {
            x: this.origin.x + lx * this.gridSize,
            y: this.origin.y - ly * this.gridSize
        };
    }
}
