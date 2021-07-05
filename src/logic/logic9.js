window.logic9 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_isset(5)) {
          cmd_load_pic(0);
          cmd_draw_pic(0);
          cmd_discard_pic(0);
          cmd_set_horizon(0);
          cmd_status_line_on();
          cmd_accept_input();
          if (!cmd_isset(200)) {
            cmd_load_view(220);
            cmd_animate_obj(220);
            cmd_set_view(220, 220);
            cmd_set_cel(220, 1);
            cmd_set_priority(220, 9);
            cmd_position(220, 79, 86);
            cmd_stop_cycling(220);
            cmd_draw(220);
          }
          if (!cmd_isset(201)) {
            cmd_load_view(225);
            cmd_animate_obj(225);
            cmd_set_view(225, 225);
            cmd_set_loop(225, 1);
            cmd_position(225, 138, 94);
            cmd_stop_cycling(225);
            cmd_draw(225);
          }
          if (!cmd_isset(202)) {
            cmd_load_view(228);
            cmd_animate_obj(228);
            cmd_set_view(228, 228);
            cmd_set_cel(228, 1);
            cmd_position(228, 51, 62);
            cmd_stop_cycling(228);
            cmd_draw(228);
          }
          cmd_assignn(6, 1);
          cmd_set_loop(0, 3);
          cmd_position(0, 76, 166);
          cmd_load_sound(9);
          cmd_sound(9, 147);
          cmd_draw(0);
          cmd_show_pic();
        }
        if (cmd_isset(147)) {
          cmd_reset(147);
          cmd_sound(9, 147);
        }
case 2800:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 102)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(200)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m1);
jumptoLineArray = [2800, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 9);
break logic;
case 280000:
            jumpTo(1);
            break logicSwitch;
}
          }
          cmd_print(m2);
jumptoLineArray = [2801];
jumpTo(2801, 9);
break logic;
}
        }
case 2801:
      case 1:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(15, 43) || cmd_said(15, 92) || cmd_said(15, 92, 43))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(201)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m3);
jumptoLineArray = [2801, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2801, 9);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
          cmd_print(m4);
jumptoLineArray = [2802];
jumpTo(2802, 9);
break logic;
}
        }
case 2802:
      case 2:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 66)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(202)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m5);
jumptoLineArray = [2802, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2802, 9);
break logic;
case 280000:
            jumpTo(3);
            break logicSwitch;
}
          }
          cmd_print(m6);
jumptoLineArray = [2803];
jumpTo(2803, 9);
break logic;
}
        }
case 2803:
      case 3:
        if (cmd_said(15, 103)) {
          cmd_print(m7);
          cmd_print(m8);
jumptoLineArray = [2804];
jumpTo(2804, 9);
break logic;
        }
case 2804:
        if (cmd_said(15, 54)) {
          cmd_print(m9);
jumptoLineArray = [2805];
jumpTo(2805, 9);
break logic;
        }
case 2805:
        if (cmd_said(15, 44)) {
          cmd_print(m10);
jumptoLineArray = [2806];
jumpTo(2806, 9);
break logic;
        }
case 2806:
        if (cmd_said(15, 104)) {
          cmd_print(m11);
          cmd_print(m12);
jumptoLineArray = [2807];
jumpTo(2807, 9);
break logic;
        }
case 2807:
        if (cmd_said(15, 105)) {
          cmd_print(m13);
          cmd_print(m14);
jumptoLineArray = [2808];
jumpTo(2808, 9);
break logic;
        }
case 2808:
        if (cmd_said(15, 106)) {
          cmd_print(m15);
jumptoLineArray = [2809];
jumpTo(2809, 9);
break logic;
        }
case 2809:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15))|| ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m16);
          cmd_print(m17);
jumptoLineArray = [2809, 28000];
ifSkipArray = [true];
jumpTo(2809, 9);
break logic;
case 28000:
          if (!cmd_isset(200)) {
            cmd_print(m18);
jumptoLineArray = [2809, 28001];
ifSkipArray = [true];
jumpTo(2809, 9);
break logic;
          }
case 28001:
          if (!cmd_isset(201)) {
            cmd_print(m19);
jumptoLineArray = [2809, 28002];
ifSkipArray = [true];
jumpTo(2809, 9);
break logic;
          }
case 28002:
          if (cmd_isset(124)) {
            cmd_print(m20);
            cmd_print(m21);
            cmd_print(m22);
jumptoLineArray = [2809, 28003];
ifSkipArray = [true];
jumpTo(2809, 9);
break logic;
          }
case 28003:
}
        }
case 2810:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 107)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_isset(124)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m20);
            cmd_print(m21);
            cmd_print(m22);
jumptoLineArray = [2810, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2810, 9);
break logic;
case 280000:
            jumpTo(4);
            break logicSwitch;
}
          }
          cmd_print(m23);
jumptoLineArray = [2811];
jumpTo(2811, 9);
break logic;
}
        }
case 2811:
      case 4:
        if (cmd_isset(124) && (cmd_said(15, 107, 19) || cmd_said(15, 19))) {
          cmd_print(m20);
          cmd_print(m21);
          cmd_print(m22);
jumptoLineArray = [2812];
jumpTo(2812, 9);
break logic;
        }
case 2812:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(50, 107) || cmd_said(50, 107, 19))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_isset(124)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m24);
            cmd_print(m25);
            cmd_print(m26);
jumptoLineArray = [2812, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2812, 9);
break logic;
case 280000:
            jumpTo(5);
            break logicSwitch;
}
          }
          cmd_print(m23);
jumptoLineArray = [2813];
jumpTo(2813, 9);
break logic;
}
        }
case 2813:
      case 5:
        if (cmd_said(26, 44)) {
          cmd_print(m27);
          cmd_print(m28);
jumptoLineArray = [2814];
jumpTo(2814, 9);
break logic;
        }
case 2814:
        if (cmd_said(26, 105)) {
          cmd_print(m29);
          cmd_print(m30);
jumptoLineArray = [2815];
jumpTo(2815, 9);
break logic;
        }
case 2815:
        if (!(cmd_said(50, 102))) {
          jumpTo(500);
          break logicSwitch;
        }
        if (!(!cmd_isset(200))) {
          jumpTo(501);
          break logicSwitch;
        }
        if (!(cmd_center_posn(0, 68, 92, 92, 110))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_print(m31);
jumptoLineArray = [2816];
jumpTo(2816, 9);
break logic;
case 2816:
        if (!(!cmd_isset(200))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_set(200);
        cmd_increment(3);
      case 503:
        cmd_erase(220);
        cmd_get(i1);
        cmd_show_obj(220);
jumptoLineArray = [2817];
jumpTo(2817, 9);
break logic;
case 2817:
        jumpTo(6);
        break logicSwitch;
      case 502:
        cmd_print(m32);
jumptoLineArray = [2818];
jumpTo(2818, 9);
break logic;
case 2818:
      case 6:
        jumpTo(7);
        break logicSwitch;
      case 501:
        cmd_print(m33);
jumptoLineArray = [2819];
jumpTo(2819, 9);
break logic;
case 2819:
      case 500:
      case 7:
        if (!((cmd_said(50, 92) || cmd_said(50, 43) || cmd_said(50, 92, 43)))) {
          jumpTo(504);
          break logicSwitch;
        }
        if (!(!cmd_isset(201))) {
          jumpTo(505);
          break logicSwitch;
        }
        if (!(cmd_right_posn(0, 128, 104, 140, 128))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_print(m34);
        cmd_print(m35);
jumptoLineArray = [2820];
jumpTo(2820, 9);
break logic;
case 2820:
        if (!(!cmd_isset(201))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_set(201);
        cmd_increment(3);
      case 507:
        cmd_erase(225);
        cmd_get(i6);
        cmd_show_obj(225);
jumptoLineArray = [2821];
jumpTo(2821, 9);
break logic;
case 2821:
        jumpTo(8);
        break logicSwitch;
      case 506:
        cmd_print(m36);
jumptoLineArray = [2822];
jumpTo(2822, 9);
break logic;
case 2822:
      case 8:
        jumpTo(9);
        break logicSwitch;
      case 505:
        cmd_print(m37);
jumptoLineArray = [2823];
jumpTo(2823, 9);
break logic;
case 2823:
      case 504:
      case 9:
        if (!(cmd_said(50, 66))) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!(!cmd_isset(202))) {
          jumpTo(509);
          break logicSwitch;
        }
        if (!(cmd_posn(0, 46, 68, 58, 80))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_print(m38);
jumptoLineArray = [2824];
jumpTo(2824, 9);
break logic;
case 2824:
        if (!(!cmd_isset(202))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_set(202);
        cmd_increment(3);
      case 511:
        cmd_erase(228);
        cmd_get(i9);
        cmd_show_obj(228);
jumptoLineArray = [2825];
jumpTo(2825, 9);
break logic;
case 2825:
        jumpTo(10);
        break logicSwitch;
      case 510:
        cmd_print(m39);
jumptoLineArray = [2826];
jumpTo(2826, 9);
break logic;
case 2826:
      case 10:
        jumpTo(11);
        break logicSwitch;
      case 509:
        cmd_print(m40);
jumptoLineArray = [2827];
jumpTo(2827, 9);
break logic;
case 2827:
      case 508:
      case 11:
case 2828:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(108, 109) || cmd_said(46, 108))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m41);
jumptoLineArray = [2828, 28000];
ifSkipArray = [true];
jumpTo(2828, 9);
break logic;
case 28000:
}      
        }
        if (cmd_equaln(2, 3)) {
          cmd_new_room(2);
          if (AGI.break_all_logics) return;
        }
        return;

    }
  }
}
MESSAGES[9] = [
  "",
  "Why is that pick not in your pocket?",
  "It's in your pocket.",
  "You left a nice glass of water sitting next to the sink.",
  "You see no glass of water.",
  "Didn't you expect to see one?",
  "You are looking at an empty nightstand.",
  "You have running water?",
  "You better catch it!",
  "It's where you dream.",
  "If you've seen one bathroom, you've seen them all.",
  "YOU THE MAN!",
  "Not conceited at all.",
  "That is where you keep you unmentionables.",
  "So let's not mention it again.",
  "You see right through them.",
  "A lovely 1 room rancher. Located in a great neighborhood. Very modern. 1 bedroom, 1 bathroom, eat-in kitchen, all the amenities. Please do not miss out on your chance to call this spectacular house your home.",
  "Hey! This is not the time to be pushing this house on people.",
  "Your trusty pick resides on the table.",
  "In your \"kitchen\" there is a glass of water on the counter.",
  "There is a mouthwatering Pizza Elemental sleeping in your bed!",
  "Those sheets are gonna be greasy!",
  "And tasty!",
  "What? Where? Dreaming of food again? Are you that hungry?",
  "You are not hungry...",
  "Even if you were, how would you feel about someone coming along and taking you for a snack!",
  "Leave the Pizza Elemental alone. You do not need it, but you are glad you've seen it.",
  "Do you have to go that badly?",
  "Maybe that is something you should do on your own time.",
  "You look great just the way you are.",
  "That's what mom tells you.",
  "How could you ever leave this behind? You make a mental note to never abandon your pick again.",
  "It's over there. Move closer.",
  "Don't you remember already getting your pick?",
  "A cool, refreshing glass of water?",
  "Don't mind if you do. But you're not thirsty, so you save it for later.",
  "It's over by the sink. Move closer.",
  "There are no more glasses. Wait, you only had one? I guess you don't entertain much.",
  "You see no reason why you shouldn't be walking around with a candelabra.",
  "It's next to the bed. Move closer.",
  "You already retrieved the candelabra",
  "No. You feel quite rested."
];
CONTROLS[9] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4<4><B.{<46{696U6>K6U6.{.,6{6E6U6>K6Z6.+.,6{696Z6>P6U6.+.,6{696U6>U6U6.+.,6{696U6>U6U6.+.{6{6Eb>U6Z6.^.{6{6>,6U6.^.{6{6>,6U6.^.{6{6>,6U6.^.+6{6>.46Z6.!.+6{6>.96U6.!.+6{6>.96U6.!.^6,6>.96Z6.x.^6{6>.E6Z6.x.^6{6>.E6Z6.x.^6{6>.K6U6.x.!6,6>.K6Z6.r.!6{6>.P6Z6.r.!6{6>.P6Z6.r.!6{6>.U6U6.r.x6,6>.U6Z6.l.x6{6>.Z6Z6.l.x6{6>.Z6Z6.l.r6,6>.g6Z6.g.r6,6<4=<r6Z6.g.r6{6<95PLP5<r6Z5.g.r6{6<95K5P5K5<r6U56.g.l6,6<95K5P5K5<x6EAE6.Z.l6,6<95E5Z5E5<x695P6.Z.l6{6<E59s95<x65U6.Z.l.1<E595l595<!5U6.Z.g6<.EArF<^5U6.U.g6<.EAxA<^5U6.U.g6<.E=<^5U6.U.Z6<.K=<^5U6.U.Z6<.K=<+5U6.P.Z6<.K=<+5U6.P.Z6><{5U6.P.U6><.45U6.K.U6><.45U6.K.U6><.45U6.K.U6><.95P6.K.P6><.E5U6.E.P6><.E5U6.E.P6><.E5U6.E.K6><.P5P6.E.K6><.P5U6.9.K6><.P5U6.9.K6><.U5P6.9.E6><.Z5U6.4.E6><.Z5U6.4.E6><.g5P6.4.96><.l5P6.4.96><.l5U6,.96><.l5PA,.96><.r59A96,.46><.xAK6,.46/46{.46/46{.46/46{,6/E6+,6/E6+,6/E6+{6/K6+{6/P6^{6/P6^{6/P6^+6/U6^+6/Z6!+6/Z6!+6/Z6!^6/l6x^6/l6x^6/l6x!6/r6x!6/x6r!6/x6r!6/x6rx6/!6rx6/^6lx6/^6lx6/^6lr6/+6lr6/{6gr6/{6gl6/,6gl6/.46Zl6/.46Zl6/.46Zg6/.96Zg6/.E6Ug6/.E6Ug6/.E6UZ6/.K6UZ6/.P6PZ<.m<9<.@P";