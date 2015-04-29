# Paper on Fire

## install 
```
sudo su
```
install node
```
 cd
 wget https://iojs.org/dist/latest/iojs-v1.8.1-linux-x64.tar.gz
 tar xzf iojs-v*-linux-x64.tar.gz && rm iojs-v*-linux-x64.* && cd iojs-v.*/ && cp bin/* /usr/bin
 cd && rm iojs-v*-linux-x64*
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
cd paper-cms-on-fire 
npm install && bower install
gulp serve
```

## running 
```
docker run --name some-nginx -v ./:/usr/share/nginx/html:ro -d -p 8080:80 nginx
```
