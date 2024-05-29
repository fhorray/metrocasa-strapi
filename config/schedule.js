module.exports = {
  schedule: {
    tasks: [
      {
        task: "delete-old-users",
        cron: "0 0 * * *", // Executa a tarefa todos os dias às 00:00
        enabled: true,
      },
    ],
  },
};

// TODO: Implementar a lógica de exclusão de usuários antigos
