window.addEventListener("load", () => {
    const canvas = document.querySelector("#white");
    const ctx = canvas.getContext("2d");
  
    //resizing
    canvas.height = 1000;
    canvas.width = 1000;
  
    ctx.beginPath();
    ctx.shadowColor = "#fbe2aa";
    ctx.shadowBlur = 25;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.moveTo(canvas.width / 2 - 300, canvas.height / 2 - 100);
    ctx.quadraticCurveTo(
      canvas.width / 2 - 80,
      canvas.width / 2 - 300,
      canvas.width / 2 + 60,
      canvas.height / 2 - 200
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
    ctx.quadraticCurveTo(
      canvas.width / 2 + 250,
      canvas.width / 2 - 20,
      canvas.width / 2 + 250,
      canvas.height / 2 - 50
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
    ctx.quadraticCurveTo(
      canvas.width / 2 + 410,
      canvas.width / 2 + 70,
      canvas.width / 2 + 250,
      canvas.height / 2 + 150
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
  
    ctx.quadraticCurveTo(
      canvas.width / 2 + 100,
      canvas.width / 2 + 250,
      canvas.width / 2 + 100,
      canvas.height / 2 + 400
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
  
    ctx.quadraticCurveTo(
      canvas.width / 2 + 80,
      canvas.width / 2 + 550,
      canvas.width / 2 - 50,
      canvas.height / 2 + 400
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
  
    ctx.quadraticCurveTo(
      canvas.width / 2 - 230,
      canvas.width / 2 + 189,
      canvas.width / 2 - 300,
      canvas.height / 2 + 200
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
  
    ctx.quadraticCurveTo(
      canvas.width / 2 - 600,
      canvas.width / 2 + 320,
      canvas.width / 2 - 300,
      canvas.height / 2 - 100
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#272921";
    ctx.fillStyle = "#f6f7f2";
    ctx.stroke();
    ctx.fill();
  });
  