   const resizer = document.getElementById("resizer");
    const sidebar = document.getElementById("silder");

    resizer.addEventListener("mousedown", function (e) {
      e.preventDefault();

      document.addEventListener("mousemove", resizeSidebar);
      document.addEventListener("mouseup", stopResize);
    });

    function resizeSidebar(e) {
      const newWidth = e.clientX;
      if (newWidth > 150 && newWidth < 600) {
        sidebar.style.width = newWidth + "px";
      }
    }

    function stopResize() {
      document.removeEventListener("mousemove", resizeSidebar);
      document.removeEventListener("mouseup", stopResize);
    }