const template = (...properties) => {
  const [props] = properties;
  return `
  <div align="center">
    <h2> Maurício Witter 🍀 </h2>
    <span> Software Developer | Free and open-source software enthusiast </span>
  </div>

  <div align="center">
    
  </div>
      
  <div align="center">
    <blockquote>
        <i>An avid learner with a passion for the complexities of software development and a deep interest in the fascinating world of software engineering and Ο(algorithms), always eager to explore new ideas and technologies. 🐧 🦀 </i>
    </blockquote>
  </div>

  <hr />

  <details closed align="center">
  <summary>  About me :fist_raised: :point_left: </summary>

  ---

  Hey there!! I am Maurício, aka [**@rwietter**](https://rwietterc.xyz/) :wave:

  I adopt the "**Learn in Public**" philosophy and with that, everything I learn, I share with the community. I love writing about software engineering and technology on my website [rwietter](https://rwietterc.xyz/) and [substack](https://rwietter.substack.com/) 

  I have experience with DevOps, Web Apps and Back-end APIs. My main knowledge in technologies are **Typescript**, **Node**, **Docker**, **React**, **Svelte**. I am also comfortable using **Vue**, **Golang**, and **Java**.

  My main abilities include designing APIs, command-line interface, applying software testing methodologies, API modeling following software design principles, and refactoring code into nice abstractions.

      
  </details>

  <details closed>
    <summary align="center"> Anything else :electron: :computer: </summary>
    <hr />
    <div align="right">
      <img width="230" height="230" align="right" title="A Tux icon" src="https://i.imgur.com/sgOrQYi.png"/>
    </div>
    <p><strong>${new Date().toLocaleDateString()}: </strong> ${props.moonphase}</p>
    <p><strong>OS: </strong>${props.osName} ● Kernel v${props.kernelVersion}</p>
    <p><strong>Shell: </strong> ${props.shell.toUpperCase()}</p>
    <p><strong>Uptime: </strong> ${props.uptime}</p>
    <p><strong>Used Mem: </strong> ${props.usedMem}</p>
    <p><strong>Last commit: </strong> ${props.lastCommit}</p>

  <div>
    <hr />
    <h4>Astronomy Picture of the Day | <a href=${props.hdurl}>${props.image_title}</a></h4>
    <img src="${props.imageRelativePath}" width="100%" height="100%"/>
  </div>
  </details>


  <details closed>
    <summary align="center"> Programming Stats </summary>
    <hr />
    <div align="center">
      <img width="34.5%" alt="used programming languages statistics" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rwietter&langs_count=10&layout=compact&exclude_repo=dotfs,blog-posts,dotfiles-bspwm"/>
      <img width="64.5%" alt="GitHub stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=rwietter&layout=compact&langs_count=8"/>
      <img width="100%" height="100%" alt="GitHub stats" src="https://github-readme-streak-stats.herokuapp.com/?user=rwietter&theme=default&hide_border=false"/>
    </div>

  </details>

  <hr />

  <div align="center">

  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rwietter/)
  [![Site](https://img.shields.io/badge/-Site-000?style=for-the-badge&logo=medium&logoColor=fff)](https://rwietterc.xyz)
  [![Substack](https://img.shields.io/badge/-Substack-fff?style=for-the-badge&logo=substack&logoColor=orange)](https://rwietter.substack.com)
  [![Github](https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rwietter)
  [![Telegram](https://img.shields.io/badge/-Telegram-007ACC?style=for-the-badge&logo=telegram&logoColor=white)](https://telegram.me/rwietter)

  </div>
  `;
}

export { template };
