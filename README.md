# local-ssl
Create auto self-signed SSL in Linux with OpenSSL and testing with nodejs server

## Commands

```bash
openssl genrsa -out vcs.key 2048
```

```bash
openssl req -new -key vcs.key -out vcs.csr
```

```bash
openssl x509 -req -in vcs.csr -CA myCA.cer -CAkey myCA.key -CAcreateserial \
-out vcs.crt -days 36500 -sha256 -extfile vcs.ext
```


## References
https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/
