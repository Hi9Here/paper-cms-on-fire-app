# Paper on Fire

## install 
```
sudo su
```
install node
```
 cd
 wget https://iojs.org/dist/latest/iojs-v2.0.0-linux-x64.tar.gz
 tar -xzf iojs-v2.0.0-linux-x64.tar.gz
 cd iojs-*
 cp bin/* /usr/bin
 cd

 wget https://npmjs.org/install.sh
 chmod +x install.sh
 sudo ./install.sh
 rm install.s*
 npm install gulp -g 
 npm install bower -g
 cd
 apt-get install ruby-full -y
 gem install compass
 
exit
 
git clone https://github.com/HackITtoday/paper-cms-on-fire-app
cd paper-cms-on-fire-app
npm install && bower install
gulp serve
```

## running 
```
docker run --name some-nginx -v ./:/usr/share/nginx/html:ro -d -p 8080:80 nginx
```
