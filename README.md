# Learning Cloud

## Setup VM in Oracle cloud

### SSH to VM
```
ssh -i /path/to/key username@ip-address
```

### Setup VM

Change to run as sudo `sudo -i`.

Update get latest package manager information and updates all packages with command: `yam update && yam upgrade -y`.

TODO: 

What needs to be installed?!

- Install git?
- Install node
- Install ngix?
- aapanel?


Allow traffic to port 3000:

`sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent`

Reload the firewall:

`sudo firewall-cmd --reload`

Verify changes:

`sudo firewall-cmd --zone=public --list-ports `