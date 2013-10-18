var Lexer = require('./lib/util-lexer');

var lex = new Lexer();

lex.ios2json('sample7010full.txt', function (json) {
	console.log(JSON.stringify(json,null,'\t'));
});

/*
{
        "sample7010full.txt": {
                "version": "4.0(2)",
                "license": "grace-period",
                "feature": [
                        "ospf",
                        "pim",
                        "eigrp",
                        "udld",
                        "interface-vlan",
                        "hsrp",
                        "lacp",
                        "glbp"
                ],
                "username": [
                        "admin password 5 $1$EeK1VKxb$sTWjduJr5kI2SV.xvFW081 role network-admin",
                        "dcbadmin password 5 $1$Xhw7JNlK$qcY3n2L6o6QlyeEaXFDsN. role network-admin"
                ],
                "telnet": "server enable",
                "ssh": "key rsa 768 force",
                "ntp": "server 172.26.129.252 use-vrf management",
                "ip": [
                        "domain-lookup",
                        "host dcb-n7k1 192.168.30.54",
                        "pim rp-address 10.8.20.1 group-list 224.0.0.0/4"
                ],
                "kernel": [
                        "core target 0.0.0.0",
                        "core limit 1"
                ],
                "snmp-server": [
                        "user admin network-admin auth md5 0xe12f21cd7a32f1c798c96d0e7b6991ab priv",
                        "user dcbadmin network-admin auth md5 0x5136fec6ca133ee17d2446761efab775 priv",
                        "enable traps entity fru",
                        "enable traps license"
                ],
                "0xe12f21cd7a32f1c798c96d0e7b6991ab": "localizedkey",
                "0x5136fec6ca133ee17d2446761efab775": "localizedkey",
                "vrf": {
                        "context management": {
                                "ip": "route 0.0.0.0/0 192.168.30.1"
                        }
                },
                "switchname": "dcb-n7k1",
                "vlan": "1,128-133,151-153,161-167,180-183,300-379,770-771",
                "spanning-tree": "vlan 128-133,166-167,180-183,300-379 priority 24576",
                "route-map": {
                        "STAT-MAP permit 10": {
                                "match": "ip address STAT-LIST",
                                "set": "metric-type type-1"
                        }
                },
                "key": {
                        "chain eigrp": {
                                "key": {
                                        "7": {
                                                "key-string": "7 070c285f4d06"
                                        }
                                }
                        }
                },
                "vdc": {
                        "dcb-n7k1 id 1": {
                                "limit-resource": [
                                        "vlan minimum 16 maximum 4094",
                                        "monitor-session minimum 0 maximum 2",
                                        "vrf minimum 16 maximum 8192",
                                        "port-channel minimum 0 maximum 192",
                                        "u4route-mem minimum 32 maximum 80",
                                        "u6route-mem minimum 16 maximum 48"
                                ]
                        }
                },
                "interface": {
                        "mgmt0": {
                                "ip": "address 192.168.30.54/24"
                        },
                        "Vlan128": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.128.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.128.1"
                                        }
                                }
                        },
                        "Vlan129": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.129.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.129.1"
                                        }
                                }
                        },
                        "Vlan130": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.130.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.130.1"
                                        }
                                }
                        },
                        "Vlan131": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.131.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.131.1"
                                        }
                                }
                        },
                        "Vlan132": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.132.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.132.1"
                                        }
                                }
                        },
                        "Vlan133": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.133.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.133.1"
                                        }
                                }
                        },
                        "Vlan161": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.161.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "authentication mode eigrp 8 md5",
                                        "authentication key-chain eigrp 8 eigrp"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "preempt": "",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.161.1"
                                        }
                                }
                        },
                        "Vlan164": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.164.3/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "mac-address": "1008.0164.0001",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.164.1"
                                        }
                                }
                        },
                        "Vlan165": {
                                "no": "shutdown",
                                "ip": [
                                        "address 10.8.165.3/24",
                                        "router eigrp 8",
                                        "passive-interface eigrp 8"
                                ],
                                "hsrp": {
                                        "1": {
                                                "authentication": "c1sc0",
                                                "mac-address": "1008.0165.0001",
                                                "preempt": "delay minimum 180",
                                                "priority": "20",
                                                "timers": "1 3",
                                                "ip": "10.8.165.1"
                                        }
                                }
                        },
                        "port-channel99": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 128-133,151-153,161-167,180-183",
                                        "trunk allowed vlan add 300-399,770-771"
                                ],
                                "spanning-tree": [
                                        "port type network",
                                        "guard loop"
                                ],
                                "logging": "event port link-status",
                                "description": "link to n7k2"
                        },
                        "port-channel111": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "spanning-tree": "guard loop",
                                "logging": "event port link-status",
                                "description": "to ss1"
                        },
                        "port-channel211": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "spanning-tree": "guard loop",
                                "logging": "event port link-status",
                                "description": "to ss2"
                        },
                        "cmp-mgmt module 5": {
                                "ip": [
                                        "address 192.168.30.64 255.255.255.0",
                                        "default-gateway 192.168.30.1"
                                ]
                        },
                        "Ethernet1/1": {
                                "description": "to core1",
                                "ip": [
                                        "address 10.8.1.2/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "authentication mode eigrp 8 md5",
                                        "authentication key-chain eigrp 8 eigrp"
                                ],
                                "no": "shutdown"
                        },
                        "Ethernet1/2": {
                                "description": "to core2",
                                "ip": [
                                        "address 10.8.3.2/24",
                                        "pim sparse-mode",
                                        "igmp version 3",
                                        "router eigrp 8",
                                        "authentication mode eigrp 8 md5",
                                        "authentication key-chain eigrp 8 eigrp"
                                ],
                                "no": "shutdown"
                        },
                        "Ethernet1/5": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 161,164-165"
                                ],
                                "description": "to asa1 te5/0",
                                "logging": [
                                        "event port link-status",
                                        "event port trunk-status"
                                ],
                                "no": "shutdown"
                        },
                        "Ethernet1/6": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 163,166-167"
                                ],
                                "description": "to asa1 te 5/1",
                                "logging": [
                                        "event port link-status",
                                        "event port trunk-status"
                                ],
                                "no": "shutdown"
                        },
                        "Ethernet1/7": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 161,164-165"
                                ],
                                "description": "to asa2 te5/0",
                                "logging": [
                                        "event port link-status",
                                        "event port trunk-status"
                                ]
                        },
                        "Ethernet1/8": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 163,166-167"
                                ],
                                "description": "to asa2 te 5/1",
                                "logging": [
                                        "event port link-status",
                                        "event port trunk-status"
                                ]
                        },
                        "Ethernet1/10": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 128-133,151-153,161-167,180-183",
                                        "trunk allowed vlan add 300-399,770-771"
                                ],
                                "description": "agg isl",
                                "channel-group": "99",
                                "no": "shutdown"
                        },
                        "Ethernet1/12": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 128-133,151-153,161-167,180-183",
                                        "trunk allowed vlan add 300-399,770-771"
                                ],
                                "description": "agg isl",
                                "channel-group": "99",
                                "no": "shutdown"
                        },
                        "Ethernet1/17": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "description": "to ss2",
                                "channel-group": "211 mode active",
                                "no": "shutdown"
                        },
                        "Ethernet1/18": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "description": "to ss2",
                                "channel-group": "211 mode active",
                                "no": "shutdown"
                        },
                        "Ethernet1/19": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "description": "to ss1",
                                "channel-group": "111 mode active",
                                "no": "shutdown"
                        },
                        "Ethernet1/20": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 162-163,180-183"
                                ],
                                "description": "to ss1",
                                "channel-group": "111 mode active",
                                "no": "shutdown"
                        },
                        "Ethernet1/23": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 128-133,166-167,180-183"
                                ],
                                "description": "to Access-1 6k",
                                "no": "shutdown"
                        },
                        "Ethernet1/24": {
                                "switchport": [
                                        "",
                                        "mode trunk",
                                        "trunk allowed vlan 128-133,166-167,180-183"
                                ],
                                "description": "to Access-2 4948",
                                "no": "shutdown"
                        },
                        "Ethernet10/25": {
                                "switchport": [
                                        "",
                                        "access vlan 770"
                                ],
                                "description": "ASA failover vlan",
                                "no": "shutdown"
                        },
                        "Ethernet10/26": {
                                "switchport": [
                                        "",
                                        "access vlan 771"
                                ],
                                "description": "ASA state vlan",
                                "no": "shutdown"
                        }
                },
                "clock": [
                        "timezone PST -8 0",
                        "summer-time PST 1 Sun April 02:00 5 Sun Oct 02:00 60"
                ],
                "boot": [
                        "kickstart bootflash:/n7000-s1-kickstart.4.0.2.bin sup-1",
                        "system bootflash:/n7000-s1-dk9.4.0.2.bin sup-1"
                ],
                "line": {
                        "console": {
                                "speed": "38400"
                        }
                },
                "router": "eigrp 8"
        }
}
*/