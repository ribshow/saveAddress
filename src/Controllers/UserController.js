import User from "../Models/User.js";

export async function searchCep(req,res){
    const { cep,name } = req.params;

    if(cep != "") {
        // expressão regular para validar cep
        var valideCep = /^[0-9]{8}$/;

        // válida o formato do cep
        if(valideCep.test(cep)) {
            try {
                const getCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
                const cepResponse = await getCep.json();
                console.log(cepResponse);

                const newUser = {
                    name: name,
                    cep: cepResponse.cep,
                    street: cepResponse.logradouro,
                    district: cepResponse.bairro,
                    locality: cepResponse.localidade,
                    uf: cepResponse.uf,
                    state: cepResponse.estado,
                    area: cepResponse.regiao,
                    ibge: cepResponse.ibge,
                    ddd: cepResponse.ddd
                }

                const saveUser = await User.insertOne(newUser);
                res.status(201).json({success: true, message: "Usuário criado com sucesso!", saveUser});
            } catch (error) {
                console.log("Erro ao buscar cep", error);
                res.status(500).json({message: "Erro ao buscar cep do usuário"});
                return;
            }
        }
    }
}