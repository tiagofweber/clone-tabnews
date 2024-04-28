function status(request, response) {
  response.status(200).json({ chave: "It works!" });
}

export default status;
