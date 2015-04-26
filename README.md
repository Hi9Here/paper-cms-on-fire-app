# Paper on Fire

## install 
```
sudo su
```
```
 cd
 wget https://iojs.org/dist/latest/iojs-v1.8.1-linux-x64.tar.gz
 tar xzf iojs-v1.8.1-linux-x64.tar.gz 
 cd iojs-v1.*/
 cp bin/* /usr/bin
 cd
 wget https://npmjs.org/install.sh
 chmod +x install.sh
 sudo ./install.sh
 npm install gulp -g 
 npm install bower -g
 cd
 rm iojs-v*-linux-x64.* install.s*
 apt-get install ruby-full -y
 gem install compass
 exit
 
git clone https://github.com/HackITtoday/paper-cms-on-fire
cd paper-cms-on-fire 
npm install && bower install
gulp serve
```

## running 
```
docker run --name some-nginx -v ./:/usr/share/nginx/html:ro -d -p 8080:80 nginx
```
