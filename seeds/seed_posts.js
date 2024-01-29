/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    { id: 1,
      title: 'Más de 500 militares llegan a Guanajuato para reforzar seguridad tras ataque contra policías',
      author: 'Amílcar Salazar Méndez',
      post_date: '2024-01-27 07:10:46',
      content: 'Al menos 550 elementos militares llegaron a Guanajuato para llevar a cabo tareas de seguridad en los municipios de Celaya, Irapuato y León. Los uniformados realizarán patrullajes, reconocimientos y establecerán puestos militares de seguridad, según lo informado por la Comandancia de la XII Región Militar y la 16/a. Zona Militar.'
    },
    { id: 2,
      title: 'Animales de circo en Indiana, EU, son rescatados tras incendiarse su remolque',
      author: 'Agencia AFP',
      post_date: '2024-01-28 07:14:53',
      content: 'Un camión que transportaba cebras y camellos para funciones de un circo se incendió en una autopista en el noreste de Indiana, Estados Unidos, lo que provocó una movilización policiaca para rescatar a los animales que vagaban en la carretera. Los hechos ocurrieron este sábado cerca de las 2:00 horas en la autopista Interestatal 69 en el condado Grant. El sargento Steven Glass, del Departamento de Policía de Indiana, informó que un policía local y una tercera persona rescataron a las cinco cebras, cuatro camellos y un caballo miniatura, sacándolos del remolque, que estaba lleno de humo.'
    },
    { id: 3,
      title: 'Policías del Estado de México secuestran y OBLIGAN a víctimas pedir dinero',
      author: 'Concepción Peralta Silverio',
      post_date: '2024-01-29 07:16:45',
      content: '¿Por qué te mandan dinero tan fácil? —le preguntan a Érick entre golpes y risas, mientras lo tienen esposado y sometido en el asiento trasero de una patrulla del Estado de México. Los dos policías están emocionados porque en un par de horas se juntaron más de 50 mil pesos y las transferencias siguen cayendo. —Porque somos amigos y me quieren —les responde orgulloso. En su mente ruega porque sus amigos, familiares, compañeros y socios dejen de enviarle dinero porque en caso contrario su secuestro durará más horas… o días. Ser una persona confiable juega en contra en esos momentos.'
    },
  ]);
};
