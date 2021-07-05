window.logic86 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        cmd_set_string(s1, m1);
        cmd_set_string(s3, m2);
        cmd_set_string(s5, m3);
        cmd_set_string(s6, m3);
        if (!cmd_isset(188)) {
          if (!cmd_isset(153)) {
            cmd_set_string(s2, m4);
            cmd_set_string(s4, m5);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(200)) {
            cmd_set_string(s2, m6);
            cmd_set_string(s4, m7);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(201)) {
            cmd_set_string(s2, m6);
            cmd_set_string(s4, m8);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(202)) {
            cmd_set_string(s2, m6);
            cmd_set_string(s4, m9);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(154)) {
            cmd_set_string(s2, m4);
            cmd_set_string(s4, m10);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(173)) {
            cmd_set_string(s2, m11);
            cmd_set_string(s4, m12);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(174)) {
            cmd_set_string(s2, m11);
            cmd_set_string(s4, m13);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(213)) {
            cmd_set_string(s2, m14);
            cmd_set_string(s4, m15);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(212)) {
            cmd_set_string(s2, m14);
            cmd_set_string(s4, m16);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(210)) {
            cmd_set_string(s2, m14);
            cmd_set_string(s4, m17);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(177)) {
            cmd_set_string(s2, m18);
            cmd_set_string(s4, m19);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(178)) {
            cmd_set_string(s2, m18);
            cmd_set_string(s4, m15);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(179)) {
            cmd_set_string(s2, m18);
            cmd_set_string(s4, m20);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(180)) {
            cmd_set_string(s2, m18);
            cmd_set_string(s4, m21);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(152)) {
            cmd_set_string(s2, m4);
            cmd_set_string(s4, m22);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(161)) {
            cmd_set_string(s2, m23);
            cmd_set_string(s4, m24);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(171)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m26);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(164) && !cmd_isset(166)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m27);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(164)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m28);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(167)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m29);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(165)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m30);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(170)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m31);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(168)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m32);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(160) && !cmd_isset(162)) {
            cmd_set_string(s2, m23);
            cmd_set_string(s4, m33);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(159)) {
            cmd_set_string(s2, m23);
            cmd_set_string(s4, m34);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(160)) {
            cmd_set_string(s2, m23);
            cmd_set_string(s4, m35);
            cmd_set_string(s5, m36);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(163)) {
            cmd_set_string(s2, m23);
            cmd_set_string(s4, m33);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(230)) {
            cmd_set_string(s2, m37);
            cmd_set_string(s4, m38);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(253)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m40);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(252)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m41);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(196)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m43);
            cmd_set_string(s5, m44);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(190)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m15);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(191)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m45);
            cmd_set_string(s5, m46);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(193)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m47);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(195)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m48);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(197)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m49);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(184)) {
            cmd_set_string(s2, m50);
            cmd_set_string(s4, m51);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(185)) {
            cmd_set_string(s2, m50);
            cmd_set_string(s4, m52);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(211)) {
            cmd_set_string(s2, m14);
            cmd_set_string(s4, m53);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(215)) {
            cmd_set_string(s2, m54);
            cmd_set_string(s4, m55);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(155)) {
            cmd_set_string(s2, m4);
            cmd_set_string(s4, m56);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(175)) {
            cmd_set_string(s2, m11);
            cmd_set_string(s4, m48);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(176)) {
            cmd_set_string(s2, m11);
            cmd_set_string(s4, m57);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(169)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m48);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(172)) {
            cmd_set_string(s2, m25);
            cmd_set_string(s4, m58);
            cmd_set_string(s5, m59);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(198)) {
            cmd_set_string(s2, m42);
            cmd_set_string(s4, m60);
            cmd_set_string(s5, m61);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(186)) {
            cmd_set_string(s2, m50);
            cmd_set_string(s4, m48);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(187)) {
            cmd_set_string(s2, m50);
            cmd_set_string(s4, m62);
            cmd_set_string(s5, m63);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(247)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m48);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(248)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m64);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(249)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m65);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(250)) {
            cmd_set_string(s2, m39);
            cmd_set_string(s4, m66);
            jumpTo(1);
            break logicSwitch;
          }
          if (!cmd_isset(188)) {
            cmd_set_string(s2, m50);
            cmd_set_string(s4, m67);
            jumpTo(1);
            break logicSwitch;
          }
        }
        if (cmd_equaln(0, 14) && !cmd_isset(240)) {
          cmd_set_string(s2, m68);
          cmd_set_string(s4, m15);
          jumpTo(1);
          break logicSwitch;
        }
        if (cmd_equaln(0, 14) && !cmd_isset(241)) {
          cmd_set_string(s2, m68);
          cmd_set_string(s4, m69);
          jumpTo(1);
          break logicSwitch;
        }
        if (cmd_equaln(0, 14) && !cmd_isset(105)) {
          cmd_set_string(s2, m68);
          cmd_set_string(s4, m70);
          jumpTo(1);
          break logicSwitch;
        }
        if (!cmd_isset(189) && cmd_isset(151)) {
          cmd_set_string(s2, m50);
          cmd_set_string(s4, m71);
          jumpTo(1);
          break logicSwitch;
        }
        cmd_set_string(s2, m72);
        cmd_set_string(s3, m3);
        cmd_set_string(s4, m3);
      case 1:
        cmd_print(m73);
jumptoLineArray = [2800];
jumpTo(2800, 86);
break logic;
case 2800:
        return;

    }
  }
}
MESSAGES[86] = [
  "",
  "Hint:\n\n",
  "\n\n",
  "",
  "Outside your house:",
  "'open' 'door'",
  "Inside your house:",
  "'get' hair 'pick'",
  "'get' 'glass' of 'water'",
  "'get' 'candelabra'",
  "'talk' to 'bodyguard'",
  "Outside your neighbor's house:",
  "'get' 'balloon'",
  "'open' 'box' 'door'",
  "Inside your neighbor's house:",
  "'talk' to 'man'",
  "'get' 'empty' 'glass'",
  "'press' 'up' 'button'",
  "At the fountain:",
  "'look' at 'plaque'",
  "'get' 'hat'",
  "'get' 'rabbit'",
  "'jump' in 'well'",
  "Inside well, at the elevator:",
  "Walk into the puddle of water.",
  "Inside well, at the tortoise's lair:",
  "'look' at 'stalactite'",
  "Walk over to the tortoise.",
  "'release' 'rabbit'",
  "'jump' 'in' 'bed'",
  "'get' 'lotion'",
  "'get' 'bellows'",
  "'get' 'fire'",
  "'press' 'button'",
  "'get' 'rock'",
  "Do not stand under the elevator.\n\n",
  "'throw' 'rock' at 'button'",
  "At the pole or vortex:",
  "Walk into the vortex.",
  "At the mountaintop oasis:",
  "'read' 'sign'",
  "Try to walk off the cliff.",
  "At the end of the road:",
  "Walk on the grass to go around the ",
  "boulder.",
  "Say 'yes' to the man after he asks for ",
  "your friendship.",
  "'give' 'balloon' to 'man'",
  "'wear' 'eyeglasses'",
  "'get' 'air' 'elemental'",
  "At the crumbling wall:",
  "'put' 'hat' 'on' 'snowman'",
  "Wait for the snowman to melt.",
  "'give' 'lotion' to 'man'",
  "Picture of neighbor's friend:",
  "Keep staring at the picture...",
  "'give' 'water' to 'bodyguard'",
  "'get' 'earth' 'elemental'",
  "'get' 'fire' 'elemental' with ",
  "'candelabra'",
  "'get' 'air' 'elemental' with ",
  "'bellows'",
  "'get' 'water' 'elemental' with ",
  "'empty' 'glass'",
  "'hug' 'heart' 'elemental'",
  "'kiss' 'heart' 'elemental'",
  "'i' 'love' 'you' 'heart' 'elemental'",
  "'kiss' 'girl'",
  "In limbo:",
  "'jump'",
  "'use' 'emergency' 'suicide' 'kit'",
  "'combine' 'elementals'",
  "There are no more hints.",
  "%s1%s2%s3%s4%s5%s6"
];
