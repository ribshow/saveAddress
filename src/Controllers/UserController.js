import User from "../Models/User.js";

export async function searchCep(req, res) {
  const { cep, name } = req.params;

  if (cep != "") {
    // expressão regular para validar cep
    var valideCep = /^[0-9]{8}$/;

    // válida o formato do cep
    if (valideCep.test(cep)) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);

        const getCep = await response.json();

        if (getCep.erro) {
          return res.status(404).json({ message: "Cep não encontrado" });
        }

        const newUser = {
          name: name,
          cep: getCep.cep,
          street: getCep.logradouro,
          district: getCep.bairro,
          locality: getCep.localidade,
          uf: getCep.uf,
          state: getCep.estado,
          area: getCep.regiao,
          ibge: getCep.ibge,
          ddd: getCep.ddd,
        };

        const saveUser = await User.create(newUser);
        res.status(201).json({
          success: true,
          message: "Usuário criado com sucesso!",
          user: saveUser,
        });
      } catch (error) {
        console.log("Erro ao buscar cep", error);
        res.status(500).json({ message: "Erro ao buscar cep do usuário" });
        return;
      }
    }
  }
}
