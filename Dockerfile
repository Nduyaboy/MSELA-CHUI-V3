FROM quay.io/princegd/princebhay:latest

RUN git clone https://github.com/PRINCE-GDS/PRINCE-MD-BOT /root/PRINCE-MD-BOT

WORKDIR /root/PRINCE-MD-BOT/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
