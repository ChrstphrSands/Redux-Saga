const url = 'https://jsonplaceholder.typicode.com/todos';

export const Service = {
  Todos: {
    getTodos: async () => {
      return await fetch(url)
        .then(res => res.json())
    },

    getTodo: async (id) => {
      return await fetch(`${url}/${id}`)
        .then(res => res.json())
    }
  }
};
