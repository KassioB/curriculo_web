     function alternarDescricao() {
            const descricao = document.getElementById("descricao");
            const btnDescricao = document.getElementById("btn-descricao");

            if (descricao.classList.contains("escondido")) {
                descricao.classList.remove("escondido");
                btnDescricao.textContent = "Mostrar menos";
            } else {
                descricao.classList.add("escondido");
                btnDescricao.textContent = "Mostrar mais";
            }

            
        }

        function alternarTema() {
                const body = document.body
                body.classList.toggle("darkmode");
            }