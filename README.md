#Commencer un prototype
Commencer rapidement un prototype en utilisant grunt, bower, jade et sass

# Technologies
- [npm][4]
- [Grunt.js][3]
- [Sass][2]
- [Jade][5]

# Installations requises

1. Installer [Node.js][11]
2. Installer le _command line_ [Grunt][3] globalement
```sh
sudo npm install -g grunt-cli -g bower
```
### Récupération des dépendances
La première fois, ou lorsque le fichier Gruntfile.js à été mis à jour, vous devez exécuter les commandes suivante dans le répertoire où se retrouve le fichier Gruntfile.js, package.json afin de récupérer les dépendances [Node.js][11] et du projet mais non présentes dans le répo de code SVN :

```
sudo npm install
bower install
```

# Ressources
- [Getting Started With Grunt][1]
- [Scss-Styleguide with BEM, OOCSS & SMACSS][15]

[1]:https://medium.com/@verpixelt/get-started-with-grunt-76d29dc25b01
[2]:http://sass-lang.com
[3]:http://gruntjs.com
[4]:https://www.npmjs.com
[5]:http://jade-lang.com/
[6]:http://www.sublimetext.com/3
[7]:https://packagecontrol.io
[8]:https://packagecontrol.io/packages/Terminal
[9]:https://eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/junosr2
[10]:http://www.aptana.com
[11]:http:https://nodejs.org/download/
[15]:http://geek-rocket.de/frontend-development/scss-styleguide-with-bem-oocss-smacss/
