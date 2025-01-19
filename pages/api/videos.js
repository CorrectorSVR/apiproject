// Base de datos inicial de videos
let videos = [
    {
      id: "1",
      title: "Dead Cells Inmortalis",
      previewImage: "/images/Inmortals.jpg",
      url: "https://www.youtube.com/watch?v=B3gdVvAu0fo",
      category: "Animation",
      description: "Serie basada en un videojuego Roguelike"
    },
    {
      id: "2",
      title: "Murder Drones",
      previewImage: "/images/Drones.jpg",
      url: "https://www.youtube.com/watch?v=mImFz8mkaHo",
      category: "Animation",
      description: "Serie de animación indie cgi"
    },
    {
      id: "3",
      title: "Tales of Zestiria",
      previewImage: "/images/Zestiria w.jpg",
      url: "https://www.youtube.com/watch?v=6P-GnpOKVeM",
      category: "Animation",
      description: "Serie basada en un videojuego rpg"
    },
    {
      id: "4",
      title: "Shadow Dark Beginnings",
      previewImage: "/images/shadow-y-maria.jpg",
      url: "https://www.youtube.com/watch?v=1s188WNEiqw",
      category: "Animation",
      description: "Mini serie basada en un videojuego de plataformas"
    },
    {
      id: "5",
      title: "Sky Childrens of Light",
      previewImage: "/images/Sky.jpg",
      url: "https://www.youtube.com/watch?v=rLOesNZTtqo",
      category: "Videogame",
      description: "Videojuego Zen free to play "
    },
    {
      id: "6",
      title: "Nier Automata",
      previewImage: "/images/Nier.jpg",
      url: "https://www.youtube.com/watch?v=B6kolEKghBw",
      category: "Videogame",
      description: "Videojuego rpg de acción"
    },
    {
      id: "7",
      title: "Clock Tower Rewind",
      previewImage: "/images/Clock tower.jpg",
      url: "https://www.youtube.com/watch?v=EdV1kzvyr9w",
      category: "Videogame",
      description: "Videojuego de horror point and click"
    },
    {
      id: "8",
      title: "Final Fantasy vs XIII",
      previewImage: "/images/Stelle.jpg",
      url: "https://www.youtube.com/watch?v=YiIx9VJWSl8",
      category: "Videogame",
      description: "Videojuego spin off rpg de acción"
    },
    {
      id: "9",
      title: "Salth of the Earth",
      previewImage: "/images/Lovesdrug.jpg",
      url: "https://www.youtube.com/watch?v=Balo8b7fESI",
      category: "Music",
      description: "Canción de rock alternativo"
    },
    {
      id: "10",
      title: "Hymn for the missing",
      previewImage: "/images/Missinge.jpg",
      url: "https://www.youtube.com/watch?v=5jMsmy_xt3U",
      category: "Music",
      description: "Canción de nu metal"
    },
    {
      id: "11",
      title: "Decretum",
      previewImage: "/images/Decretum.jpg",
      url: "https://www.youtube.com/watch?v=A_k9d391eP0",
      category: "Music",
      description: "Banda sonora de un anime magical girls"
    },
    {
      id: "12",
      title: "Lightwaves",
      previewImage: "/images/LightWaves.jpg",
      url: "https://www.youtube.com/watch?v=DjJKHFwLpg4",
      category: "Music",
      description: "Banda sonora del videojuego Final Fantasy X-2"
    }
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Método GET: Devuelve todos los videos
      res.status(200).json({ videos });
    } else if (req.method === 'POST') {
      // Método POST: Agrega un nuevo video
      const newVideo = req.body; // Recibe el nuevo video del cliente
      newVideo.id = String(videos.length + 1); // Genera un ID único basado en la longitud de la lista
      videos.push(newVideo); // Agrega el video a la lista
      res.status(201).json(newVideo); // Devuelve el video agregado
    } else if (req.method === 'PUT') {
      // Método PUT: Actualiza un video existente por su ID
      const { id } = req.query; // Obtiene el ID del video que se desea actualizar
      const updatedVideo = req.body; // Los nuevos datos del video
      let videoFound = false;
  
      // Busca y actualiza el video con el ID correspondiente
      videos = videos.map(video => {
        if (video.id === id) {
          videoFound = true;
          return { ...video, ...updatedVideo }; // Actualiza el video con los nuevos datos
        }
        return video; // Devuelve el video sin cambios si no es el que se busca
      });
  
      if (videoFound) {
        res.status(200).json({ message: 'Video actualizado correctamente' });
      } else {
        res.status(404).json({ message: 'Video no encontrado' });
      }
    } else if (req.method === 'DELETE') {
      // Método DELETE: Elimina un video por su ID
      const { id } = req.query; // Obtiene el ID del video a eliminar
      const index = videos.findIndex(video => video.id === id); // Busca el índice del video
  
      if (index !== -1) {
        videos.splice(index, 1); // Elimina el video de la lista
        res.status(200).json({ message: 'Video eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Video no encontrado' });
      }
    } else {
      // Si el método HTTP no es GET, POST, PUT ni DELETE
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  

