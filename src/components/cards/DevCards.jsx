import './DevCards.css';
import DevCard from './DevCard.jsx';
import WeatherApp from '/weather-app.png';
import ToDoList from '/todo-list.png';
import RestaurantPage from '/restaurant-page.png';
import TicTacToe from '/tic-tac-toe.png';
import Library from '/library.png';
import AdminDashboard from '/admin-dashboard.png';

function DevCards() {
  const projects = [
    {
      title: 'Weather App',
      desc: 'A website that will show the weather forecast of a location.',
      imageURL: WeatherApp,
      websiteURL: 'https://tekksunn.github.io/weather-app/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/weather-app',
      id: crypto.randomUUID(),
    },
    {
      title: 'To-Do List',
      desc: 'A website that will help you organize your to-dos.',
      imageURL: ToDoList,
      websiteURL: 'https://tekksunn.github.io/todo-list/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/todo-list',
      id: crypto.randomUUID(),
    },
    {
      title: 'Restaurant Page',
      desc: 'A restaurant page, shows what a restaurant page looks like.',
      imageURL: RestaurantPage,
      websiteURL: 'https://tekksunn.github.io/restaurant-page/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/restaurant-page',
      id: crypto.randomUUID(),
    },
    {
      title: 'Tic-Tac-Toe',
      desc: 'A browser-based game implementation of tic-tac-toe.',
      imageURL: TicTacToe,
      websiteURL: 'https://tekksunn.github.io/tic-tac-toe/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/tic-tac-toe',
      id: crypto.randomUUID(),
    },
    {
      title: 'Library',
      desc: "A website that helps track books you've read and not read.",
      imageURL: Library,
      websiteURL: 'https://tekksunn.github.io/odin-library/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/odin-library',
      id: crypto.randomUUID(),
    },
    {
      title: 'Admin Dashboard',
      desc: 'A website that shows what an admin dashboard looks like.',
      imageURL: AdminDashboard,
      websiteURL: 'https://tekksunn.github.io/top-admin-dashboard/',
      sourceCodeURL: 'https://github.com/TEKKSUNN/top-admin-dashboard',
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div className="works">
      <h2 className="title">My Works</h2>
      <div className="dev-cards">
        {projects.map((project) => {
          return (
            <DevCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              imageURL={project.imageURL}
              websiteURL={project.websiteURL}
              sourceCodeURL={project.sourceCodeURL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DevCards;
