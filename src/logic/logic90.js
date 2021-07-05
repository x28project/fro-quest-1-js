window.logic90 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_isset(57)) {
          cmd_reset(57);
          cmd_end_of_loop(2, 58);
        }
        if (cmd_isset(58)) {
          cmd_reset(58);
          cmd_erase(2);
          cmd_draw(0);
        }
        if (!(cmd_isset(2) && cmd_equaln(9, 0) && !cmd_isset(4))) {
          jumpTo(500);
          break logicSwitch;
        }
        if (!((cmd_said(129, 109) || cmd_said(46, 129, 109) || cmd_said(46, 46, 129, 109) || cmd_said(46, 46, 46, 129, 109) || cmd_said(46, 46, 46, 46, 129, 109) || cmd_said(46, 46, 46, 46, 46, 129, 109)))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_increment(252);
        if (!(cmd_equaln(252, 1))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_print(m1);
jumptoLineArray = [2800];
jumpTo(2800, 90);
break logic;
case 2800:
      case 502:
        if (!(cmd_equaln(252, 2))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_print(m2);
jumptoLineArray = [2801];
jumpTo(2801, 90);
break logic;
case 2801:
      case 503:
        if (!(cmd_equaln(252, 3))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_print(m3);
jumptoLineArray = [2802];
jumpTo(2802, 90);
break logic;
case 2802:
        cmd_assignn(252, 0);
      case 504:
      case 501:
        if (!(cmd_said(15, 124))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_print(m4);
jumptoLineArray = [2803];
jumpTo(2803, 90);
break logic;
case 2803:
      case 505:
        if (!((cmd_said(15, 46) || cmd_said(15, 46, 46)))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_print(m5);
jumptoLineArray = [2804];
jumpTo(2804, 90);
break logic;
case 2804:
      case 506:
        if (!((cmd_said(50, 46) || cmd_said(50, 46, 46)))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_print(m6);
jumptoLineArray = [2805];
jumpTo(2805, 90);
break logic;
case 2805:
      case 507:
        if (!((cmd_said(43, 43) || cmd_said(43, 92) || cmd_said(43, 92, 43)))) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!(cmd_has(i6))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_print(m7);
jumptoLineArray = [2806];
jumpTo(2806, 90);
break logic;
case 2806:
        jumpTo(1);
        break logicSwitch;
      case 509:
        cmd_print(m8);
jumptoLineArray = [2807];
jumpTo(2807, 90);
break logic;
case 2807:
      case 508:
      case 1:
        if (!((cmd_said(43) || cmd_said(43, 46)))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_print(m9);
jumptoLineArray = [2808];
jumpTo(2808, 90);
break logic;
case 2808:
      case 510:
        if (!(cmd_said(130, 131))) {
          jumpTo(511);
          break logicSwitch;
        }
        if (!(cmd_has(i10))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_prevent_input();
        cmd_animate_obj(229);
        cmd_load_view(229);
        cmd_set_view(229, 229);
        cmd_set_cel(229, 2);
        cmd_set_priority(229, 15);
        cmd_position(229, 0, 0);
        cmd_fix_loop(229);
        cmd_ignore_blocks(229);
        cmd_ignore_horizon(229);
        cmd_ignore_objs(229);
        cmd_stop_cycling(229);
        cmd_draw(229);
        cmd_set(123);
        jumpTo(2);
        break logicSwitch;
      case 512:
        cmd_print(m10);
jumptoLineArray = [2809];
jumpTo(2809, 90);
break logic;
case 2809:
      case 511:
      case 2:
        if (!(cmd_said(22, 56) && cmd_has(i4))) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_print(m11);
        cmd_print(m12);
jumptoLineArray = [2810];
jumpTo(2810, 90);
break logic;
case 2810:
      case 513:
        if (!((cmd_said(22, 46) || cmd_said(22, 46, 46)))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_print(m13);
jumptoLineArray = [2811];
jumpTo(2811, 90);
break logic;
case 2811:
      case 514:
        if (!((cmd_said(42, 46) || cmd_said(42, 46, 46)))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_print(m14);
jumptoLineArray = [2812];
jumpTo(2812, 90);
break logic;
case 2812:
      case 515:
        if (!((cmd_said(132, 133) || cmd_said(134, 133)))) {
          jumpTo(516);
          break logicSwitch;
        }
        if (!(cmd_has(i8))) {
          jumpTo(517);
          break logicSwitch;
        }
        if (!(!cmd_isset(102))) {
          jumpTo(518);
          break logicSwitch;
        }
        cmd_print(m15);
jumptoLineArray = [2813];
jumpTo(2813, 90);
break logic;
case 2813:
        jumpTo(3);
        break logicSwitch;
      case 518:
        cmd_reset(102);
        cmd_erase(9);
      case 3:
        jumpTo(4);
        break logicSwitch;
      case 517:
        cmd_print(m16);
jumptoLineArray = [2814];
jumpTo(2814, 90);
break logic;
case 2814:
      case 516:
      case 4:
        if (!((cmd_said(130, 133) || cmd_said(130, 133)))) {
          jumpTo(519);
          break logicSwitch;
        }
        if (!(cmd_has(i8))) {
          jumpTo(520);
          break logicSwitch;
        }
        if (!(cmd_isset(102))) {
          jumpTo(521);
          break logicSwitch;
        }
        cmd_print(m17);
jumptoLineArray = [2815];
jumpTo(2815, 90);
break logic;
case 2815:
        jumpTo(5);
        break logicSwitch;
      case 521:
        cmd_load_view(14);
        cmd_animate_obj(2);
        cmd_set_view(2, 14);
        cmd_set_loop(2, 5);
        cmd_last_cel(2, 88);
        cmd_set_cel_v(2, 88);
        cmd_position_v(2, 30, 31);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(2, 84);
        cmd_erase(0);
        cmd_draw(2);
        cmd_reverse_loop(2, 57);
      case 5:
        jumpTo(6);
        break logicSwitch;
      case 520:
        cmd_print(m16);
jumptoLineArray = [2816];
jumpTo(2816, 90);
break logic;
case 2816:
      case 519:
      case 6:
      case 522:
        if (!(cmd_said(125))) {
          jumpTo(523);
          break logicSwitch;
        }
        cmd_print(m18);
jumptoLineArray = [2817];
jumpTo(2817, 90);
break logic;
case 2817:
      case 523:
        if (!(cmd_said(125, 109))) {
          jumpTo(524);
          break logicSwitch;
        }
        cmd_print(m19);
        cmd_print(m20);
jumptoLineArray = [2818];
jumpTo(2818, 90);
break logic;
case 2818:
      case 524:
        if (!(cmd_said(95))) {
          jumpTo(525);
          break logicSwitch;
        }
        cmd_print(m21);
        cmd_print(m22);
jumptoLineArray = [2819];
jumpTo(2819, 90);
break logic;
case 2819:
      case 525:
        if (!(cmd_said(95, 109))) {
          jumpTo(526);
          break logicSwitch;
        }
        cmd_print(m23);
jumptoLineArray = [2820];
jumpTo(2820, 90);
break logic;
case 2820:
      case 526:
        if (!(cmd_said(127))) {
          jumpTo(527);
          break logicSwitch;
        }
        cmd_print(m24);
        cmd_print(m25);
        cmd_print(m26);
        cmd_print(m27);
        cmd_print(m28);
jumptoLineArray = [2821];
jumpTo(2821, 90);
break logic;
case 2821:
      case 527:
        if (!(cmd_said(126, 127))) {
          jumpTo(528);
          break logicSwitch;
        }
        cmd_print(m29);
jumptoLineArray = [2822];
jumpTo(2822, 90);
break logic;
case 2822:
      case 528:
        if (!((cmd_said(127, 109) || cmd_said(126, 127, 109)))) {
          jumpTo(529);
          break logicSwitch;
        }
        cmd_print(m30);
jumptoLineArray = [2823];
jumpTo(2823, 90);
break logic;
case 2823:
      case 529:
      case 500:
        if ((cmd_isset(123) || cmd_isset(124))) {
          cmd_call(88, [2700]);
          if (AGI.break_all_logics) return;
        }
case 2700:
        return;

    }
  }
}
MESSAGES[90] = [
  "",
  "You kiss your mother with that mouth?!",
  "Where is that British woman with the elliptical path traveling gum...?",
  "Sha, right!",
  "You have to look on the inside. You might learn something about yourself.",
  "What? Where?",
  "You can't get that here!",
  "You are not thirsty, but someone, somewhere is...",
  "You have nothing to drink.",
  "You are not thirsty.",
  "You have no eyeglasses. Doesn't everything look clear to you?",
  "You skin is already refreshingly moisturized. Did you have something else in mind?",
  "No...you didn't.",
  "What do you want me to do with it?",
  "No one here needs that!",
  "I don't think you can take off that which you are not wearing.",
  "You ain't dead yet!\nHave a little confidence in yourself.",
  "You're already making that fashion statement.",
  "You hug yourself. You feel better.",
  "Sometimes you just need to hug it out.",
  "Now is not one of those times.",
  "You blow a kiss into the wind.",
  "The wind does not return the sentiment.",
  "Don't put your lips on that!",
  "What is love?",
  "Baby, don't hur...",
  "No really, what is love?",
  "It's a funny thing... And also a battlefield, an open door, and a two-way street.",
  "That should clarify it for you.",
  "I bet you do.",
  "That's nice to know. But it doesn't help you here."
];
