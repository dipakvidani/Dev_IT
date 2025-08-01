 $(document).ready(function () {
        //task 1

        // $("body > div:nth-child(2n+1)").css("background-color", "black");
        // $("body > div:nth-child(2n)").css("background-color", "pink");

        // $("body > div:nth-child(2n+1) > div:nth-child(2n+1)").css(
        //   "background-color",
        //   "purple"
        // );
        // $("body > div:nth-child(2n) > div:nth-child(2n)").css(
        //   "background-color",
        //   "yellow"
        // );

        //task 2
        $("body").click((e) => {
          if (e.target.className) {
            console.dir(e.target);

            console.log(e.target.className, `is Clicked!!`);

            $("body>div:nth-child(1)>div:nth-child(3)")
              .removeClass("notactice")
              .addClass("active")
              .css("background-color", "purple");
          } else {
            console.log(e.target.innerHTML, "is Clicked!!!");

            $("body>div:nth-child(1)>div:nth-child(3)")
              .removeClass("active")
              .addClass("notactice")
              .css("background-color", "");
          }
        });
      });