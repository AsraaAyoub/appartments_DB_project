fetch('/allposts')
          .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
          })
          // if we get a successful response
          .then(data => {
            console.log(data);
          //   const heading = document.createElement("h2");
          //   heading.textContent = pokemonData.name;
          //   const image = document.createElement("img");
          //   image.src = pokemonData.sprites.front_default;
          //   image.alt = "";

          //   output.appendChild(heading);
          //   output.appendChild(image);
           })
          // if the request is unsuccessful
          .catch(error => {
            console.log(error);
            if (error.message === "404") {
              output.textContent = `⚠️ Couldn't find "${name}"`;
            } else {
              output.textContent = "⚠️ Something went wrong";
            }
          });
      