window.logic6 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!(cmd_isset(5))) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(0);
        cmd_status_line_on();
        cmd_accept_input();
        cmd_load_view(74);
        cmd_animate_obj(74);
        cmd_set_view(74, 74);
        cmd_position(74, 72, 94);
        cmd_normal_cycle(74);
        cmd_ignore_blocks(74);
        cmd_ignore_objs(74);
        cmd_assignn(80, 4);
        cmd_cycle_time(74, 80);
        cmd_draw(74);
        if (!(!cmd_isset(180))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_load_view(75);
        cmd_animate_obj(70);
        cmd_set_view(70, 75);
        cmd_position(70, 122, 154);
        cmd_normal_cycle(70);
        cmd_wander(70);
        cmd_draw(70);
      case 501:
        if (!(!cmd_isset(179))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_set(70);
        cmd_set(71);
        cmd_load_view(71);
        cmd_animate_obj(71);
        cmd_set_view(71, 71);
        cmd_position(71, 108, 134);
        cmd_normal_cycle(71);
        cmd_assignn(80, 2);
        cmd_cycle_time(71, 80);
        cmd_draw(71);
        cmd_load_view(76);
        cmd_animate_obj(76);
        cmd_set_view(76, 76);
        cmd_position(76, 108, 134);
        cmd_normal_cycle(76);
        cmd_assignn(80, 4);
        cmd_cycle_time(76, 80);
        cmd_step_time(76, 80);
        cmd_fix_loop(76);
        cmd_load_view(72);
        cmd_animate_obj(72);
        cmd_set_view(72, 72);
        cmd_position(72, 108, 134);
        cmd_normal_cycle(72);
        cmd_assignn(80, 4);
        cmd_cycle_time(72, 80);
        cmd_fix_loop(72);
        cmd_load_view(77);
        cmd_animate_obj(73);
        cmd_set_view(73, 77);
        cmd_position(73, 108, 134);
        cmd_ignore_blocks(73);
        cmd_ignore_horizon(73);
        cmd_ignore_objs(73);
        cmd_normal_cycle(73);
        cmd_assignn(80, 1);
        cmd_cycle_time(73, 80);
        cmd_load_sound(60);
        cmd_sound(60, 147);
        jumpTo(1);
        break logicSwitch;
      case 502:
        cmd_load_sound(61);
        cmd_sound(61, 147);
      case 1:
        if (!(cmd_equaln(1, 5))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_position(0, 74, 167);
        jumpTo(3);
        break logicSwitch;
      case 503:
        if (!(cmd_equaln(1, 7))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(80, 159);
        if (!(cmd_lessn(33, 94))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(33, 94);
        jumpTo(2);
        break logicSwitch;
      case 505:
        if (!(cmd_greatern(33, 154))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(33, 154);
      case 506:
      case 2:
        cmd_position_v(0, 80, 33);
        jumpTo(3);
        break logicSwitch;
      case 504:
        cmd_position(0, 104, 134);
      case 3:
        cmd_draw(0);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (!cmd_isset(179)) {
            cmd_reset(147);
            cmd_sound(60, 147);
            jumpTo(4);
            break logicSwitch;
          }
          cmd_reset(147);
          cmd_sound(61, 147);
        }
      case 4:
case 2800:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m1);
          cmd_print(m2);
jumptoLineArray = [2800, 28000];
ifSkipArray = [true];
jumpTo(2800, 6);
break logic;
case 28000:
          if (!cmd_isset(180)) {
            cmd_print(m3);
jumptoLineArray = [2800, 28001];
ifSkipArray = [true];
jumpTo(2800, 6);
break logic;
          }
case 28001:
          if (!cmd_isset(179)) {
            cmd_print(m4);
            cmd_print(m5);
            cmd_print(m6);
jumptoLineArray = [2800, 28002];
ifSkipArray = [true];
jumpTo(2800, 6);
break logic;
          }
case 28002:
}
        }
        if (cmd_said(15, 74)) {
          cmd_print(m7);
jumptoLineArray = [2803];
jumpTo(2803, 6);
break logic;
        }
case 2803:
        if (!cmd_isset(180) && cmd_said(15, 60)) {
          cmd_print(m8);
          cmd_print(m9);
          cmd_print(m10);
          cmd_print(m11);
          cmd_print(m12);
jumptoLineArray = [2804];
jumpTo(2804, 6);
break logic;
        }
case 2804:
        if (!cmd_isset(179) && cmd_said(15, 29)) {
          cmd_print(m13);
          cmd_print(m14);
          cmd_print(m15);
jumptoLineArray = [2805];
jumpTo(2805, 6);
break logic;
        }
case 2805:
        if (cmd_said(15, 75)) {
          cmd_print(m16);
jumptoLineArray = [2806];
jumpTo(2806, 6);
break logic;
        }
case 2806:
case 2807:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(15, 76) || cmd_said(77, 76))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m17);
jumptoLineArray = [2807, 28000];
ifSkipArray = [true];
jumpTo(2807, 6);
break logic;
case 28000:
          if (!cmd_isset(177)) {
            cmd_set(177);
            cmd_increment(3);
          }
}
        }
        if (cmd_said(15, 33)) {
          cmd_print(m18);
jumptoLineArray = [2808];
jumpTo(2808, 6);
break logic;
        }
case 2808:
        if (cmd_said(15, 37)) {
          cmd_print(m19);
jumptoLineArray = [2809];
jumpTo(2809, 6);
break logic;
        }
case 2809:
        if (cmd_said(15, 68)) {
          cmd_print(m20);
jumptoLineArray = [2810];
jumpTo(2810, 6);
break logic;
        }
case 2810:
        if (cmd_said(15, 34)) {
          cmd_print(m21);
          cmd_print(m22);
jumptoLineArray = [2811];
jumpTo(2811, 6);
break logic;
        }
case 2811:
        if (cmd_said(15, 35)) {
          cmd_print(m23);
jumptoLineArray = [2812];
jumpTo(2812, 6);
break logic;
        }
case 2812:
        if (cmd_said(15, 36)) {
          cmd_print(m24);
          cmd_print(m25);
          cmd_print(m26);
jumptoLineArray = [2813];
jumpTo(2813, 6);
break logic;
        }
case 2813:
        if (cmd_said(15, 39)) {
          cmd_print(m27);
jumptoLineArray = [2814];
jumpTo(2814, 6);
break logic;
        }
case 2814:
        if (cmd_said(15, 40)) {
          cmd_print(m28);
jumptoLineArray = [2815];
jumpTo(2815, 6);
break logic;
        }
case 2815:
        if (cmd_said(50, 69)) {
          cmd_print(m29);
          cmd_print(m30);
jumptoLineArray = [2816];
jumpTo(2816, 6);
break logic;
        }
case 2816:
        if (cmd_said(50, 76)) {
          cmd_print(m31);
jumptoLineArray = [2817];
jumpTo(2817, 6);
break logic;
        }
case 2817:
        if (!(!cmd_isset(179))) {
          jumpTo(507);
          break logicSwitch;
        }
        if (!(cmd_isset(74))) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!(cmd_lessn(108, 8))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_increment(108);
        jumpTo(5);
        break logicSwitch;
      case 509:
        cmd_reset(74);
        cmd_get(i5);
        cmd_show_obj(224);
jumptoLineArray = [2818];
jumpTo(2818, 6);
break logic;
case 2818:
        if (!(!cmd_isset(179))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_set(179);
        cmd_increment(3);
      case 510:
        cmd_get_posn(72, 101, 102);
        cmd_position_v(73, 101, 102);
        cmd_erase(71);
        cmd_erase(76);
        cmd_erase(72);
        cmd_draw(73);
        cmd_move_obj(73, 159, 126, 1, 75);
        cmd_print(m32);
        cmd_print(m33);
        cmd_print(m34);
jumptoLineArray = [2819];
jumpTo(2819, 6);
break logic;
case 2819:
      case 508:
      case 5:
        if (!(cmd_isset(71))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_reset(71);
        if (!(!cmd_isset(70))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_get_posn(76, 101, 102);
        cmd_position_v(71, 101, 102);
        cmd_erase(72);
        cmd_draw(71);
      case 512:
        cmd_set_cel(71, 0);
        cmd_end_of_loop(71, 72);
        jumpTo(6);
        break logicSwitch;
      case 511:
        if (!(cmd_isset(72))) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_reset(70);
        cmd_reset(72);
        cmd_get_posn(71, 101, 102);
        cmd_position_v(76, 101, 102);
        cmd_erase(71);
        cmd_draw(76);
        cmd_set_cel(76, 0);
        cmd_end_of_loop(76, 73);
        jumpTo(6);
        break logicSwitch;
      case 513:
        if (!(cmd_isset(73))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_reset(73);
        cmd_get_posn(76, 101, 102);
        cmd_position_v(72, 101, 102);
        cmd_erase(76);
        cmd_draw(72);
        cmd_set_cel(72, 0);
        cmd_end_of_loop(72, 71);
        jumpTo(6);
        break logicSwitch;
      case 514:
        cmd_current_cel(76, 103);
        cmd_last_cel(76, 104);
        if (!(cmd_equaln(103, 3))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_wander(76);
        jumpTo(6);
        break logicSwitch;
      case 515:
        if (!(cmd_equalv(103, 104))) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_set(73);
        cmd_set_cel(76, 0);
        cmd_normal_motion(76);
      case 516:
      case 507:
      case 6:
        if (cmd_isset(75)) {
          cmd_reset(75);
          cmd_erase(73);
          cmd_load_sound(61);
          cmd_sound(61, 147);
        }
case 2820:
ifSkip = ifSkipArrayShift();
        if ((!cmd_isset(179) && cmd_said(41, 29)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m35);
          cmd_print(m36);
jumptoLineArray = [2820, 28000];
ifSkipArray = [true];
jumpTo(2820, 6);
break logic;
case 28000:
          cmd_load_view(203);
          cmd_animate_obj(203);
          cmd_set_view(203, 203);
          cmd_set_loop(203, 0);
          cmd_set_cel(203, 0);
          cmd_position(203, 5, 67);
          cmd_set_priority(203, 15);
          cmd_ignore_objs(203);
          cmd_assignn(91, 2);
          cmd_cycle_time(203, 91);
          cmd_draw(203);
          cmd_assignn(77, 0);
          cmd_end_of_loop(203, 121);
}
        }
        if (!(cmd_isset(121))) {
          jumpTo(517);
          break logicSwitch;
        }
        if (!(cmd_equaln(77, 0))) {
          jumpTo(518);
          break logicSwitch;
        }
        cmd_print(m37);
jumptoLineArray = [2821];
jumpTo(2821, 6);
break logic;
case 2821:
        jumpTo(7);
        break logicSwitch;
      case 518:
        if (!(cmd_equaln(77, 1))) {
          jumpTo(519);
          break logicSwitch;
        }
        cmd_print(m38);
jumptoLineArray = [2822];
jumpTo(2822, 6);
break logic;
case 2822:
        jumpTo(7);
        break logicSwitch;
      case 519:
        if (!(cmd_equaln(77, 2))) {
          jumpTo(520);
          break logicSwitch;
        }
        cmd_print(m39);
jumptoLineArray = [2823];
jumpTo(2823, 6);
break logic;
case 2823:
        jumpTo(7);
        break logicSwitch;
      case 520:
        if (!(cmd_equaln(77, 3))) {
          jumpTo(521);
          break logicSwitch;
        }
        cmd_print(m40);
jumptoLineArray = [2824];
jumpTo(2824, 6);
break logic;
case 2824:
        jumpTo(7);
        break logicSwitch;
      case 521:
        if (!(cmd_equaln(77, 4))) {
          jumpTo(522);
          break logicSwitch;
        }
        cmd_print(m41);
jumptoLineArray = [2825];
jumpTo(2825, 6);
break logic;
case 2825:
        cmd_set(79);
      case 522:
      case 7:
        if (!(!cmd_lessn(77, 3))) {
          jumpTo(523);
          break logicSwitch;
        }
        cmd_assignn(77, 0);
        cmd_reset(121);
        cmd_erase(203);
        if (!(!cmd_isset(178))) {
          jumpTo(524);
          break logicSwitch;
        }
        cmd_set(178);
        cmd_increment(3);
      case 524:
        jumpTo(8);
        break logicSwitch;
      case 523:
        cmd_reset(121);
        cmd_set_loop(203, 2);
        cmd_random(0, 5, 80);
        cmd_set_cel_v(203, 80);
        cmd_end_of_loop(203, 122);
        cmd_increment(77);
      case 517:
      case 8:
        if (cmd_isset(122)) {
          cmd_reset(122);
          cmd_set_loop(203, 1);
          cmd_set_cel(203, 0);
          cmd_end_of_loop(203, 121);
        }
        if (!(cmd_said(50, 78))) {
          jumpTo(525);
          break logicSwitch;
        }
        if (!(!cmd_isset(179))) {
          jumpTo(526);
          break logicSwitch;
        }
        cmd_distance(0, 71, 105);
        cmd_distance(0, 76, 106);
        cmd_distance(0, 72, 107);
        if (!((cmd_lessn(105, 10) || cmd_lessn(106, 10) || cmd_lessn(107, 10)))) {
          jumpTo(527);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_load_view(203);
        cmd_animate_obj(203);
        cmd_set_view(203, 203);
        cmd_set_loop(203, 2);
        cmd_set_cel(203, 0);
        cmd_position(203, 5, 67);
        cmd_set_priority(203, 15);
        cmd_ignore_objs(203);
        cmd_assignn(91, 2);
        cmd_cycle_time(203, 91);
        cmd_draw(203);
        cmd_assignn(77, 4);
        cmd_end_of_loop(203, 121);
        jumpTo(9);
        break logicSwitch;
      case 527:
        cmd_print(m42);
jumptoLineArray = [2826];
jumpTo(2826, 6);
break logic;
case 2826:
      case 9:
        jumpTo(10);
        break logicSwitch;
      case 526:
        cmd_print(m43);
jumptoLineArray = [2827];
jumpTo(2827, 6);
break logic;
case 2827:
      case 525:
      case 10:
        if (!(cmd_isset(79))) {
          jumpTo(528);
          break logicSwitch;
        }
        cmd_reset(79);
        if (!(cmd_lessn(105, 10))) {
          jumpTo(529);
          break logicSwitch;
        }
        cmd_get_posn(71, 101, 102);
        cmd_position_v(72, 101, 102);
        cmd_erase(71);
        jumpTo(11);
        break logicSwitch;
      case 529:
        if (!(cmd_lessn(106, 10))) {
          jumpTo(530);
          break logicSwitch;
        }
        cmd_get_posn(76, 101, 102);
        cmd_position_v(72, 101, 102);
        cmd_erase(76);
      case 530:
      case 11:
        cmd_reset(71);
        cmd_reset(72);
        cmd_reset(73);
        cmd_set_loop(72, 1);
        cmd_set_cel(72, 0);
        cmd_draw(72);
        cmd_end_of_loop(72, 74);
      case 528:
        if (!(cmd_said(50, 60))) {
          jumpTo(531);
          break logicSwitch;
        }
        if (!(cmd_isset(180))) {
          jumpTo(532);
          break logicSwitch;
        }
        cmd_print(m44);
jumptoLineArray = [2828];
jumpTo(2828, 6);
break logic;
case 2828:
        jumpTo(13);
        break logicSwitch;
      case 532:
        if (!(cmd_has(i5))) {
          jumpTo(533);
          break logicSwitch;
        }
        cmd_distance(0, 70, 109);
        if (!(cmd_lessn(109, 20))) {
          jumpTo(534);
          break logicSwitch;
        }
        cmd_normal_motion(70);
        cmd_follow_ego(70, 1, 100);
        cmd_set(76);
        jumpTo(12);
        break logicSwitch;
      case 534:
        cmd_print(m45);
jumptoLineArray = [2829];
jumpTo(2829, 6);
break logic;
case 2829:
      case 12:
        jumpTo(13);
        break logicSwitch;
      case 533:
        cmd_print(m46);
jumptoLineArray = [2830];
jumpTo(2830, 6);
break logic;
case 2830:
      case 531:
      case 13:
        if (!(cmd_isset(76))) {
          jumpTo(535);
          break logicSwitch;
        }
        cmd_reset(76);
        cmd_print(m47);
jumptoLineArray = [2831];
jumpTo(2831, 6);
break logic;
case 2831:
        cmd_load_view(78);
        cmd_animate_obj(78);
        cmd_set_view(78, 78);
        cmd_get_posn(0, 30, 31);
        cmd_position_v(78, 30, 31);
        cmd_get_posn(70, 82, 83);
        cmd_addn(82, 4);
        if (!(!cmd_lessv(30, 82))) {
          jumpTo(536);
          break logicSwitch;
        }
        cmd_set_loop(78, 0);
        jumpTo(14);
        break logicSwitch;
      case 536:
        cmd_set_loop(78, 1);
      case 14:
        cmd_erase(0);
        cmd_draw(78);
        cmd_end_of_loop(78, 77);
        jumpTo(15);
        break logicSwitch;
      case 535:
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_reverse_cycle(78);
          cmd_erase(70);
          cmd_set(78);
          jumpTo(15);
          break logicSwitch;
        }
case 2832:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(78)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_current_cel(78, 110);
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(110, 0)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_reset(78);
            cmd_stop_cycling(78);
            cmd_erase(78);
            cmd_draw(0);
            cmd_get(i3);
            cmd_show_obj(222);
jumptoLineArray = [2832, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2832, 6);
break logic;
case 280000:
            if (!cmd_isset(180)) {
              cmd_set(180);
              cmd_increment(3);
            }
}
          }
}
        }
      case 15:
        if (cmd_equaln(2, 3)) {
          cmd_new_room(5);
          if (AGI.break_all_logics) return;
        }
        if (cmd_equaln(2, 2)) {
          cmd_new_room(7);
          if (AGI.break_all_logics) return;
        }
        return;

    }
  }
}
MESSAGES[6] = [
  "",
  "A fountain. Yes, you see the fountain. There is also a statue honoring an heroic legend of our time. Below the statue is a plaque with some words of wisdom.",
  "In addition to the loveliness of this park, there really should be a sign saying,\n\n\"BEWARE OF FALLING ROCKS\"\n\nWho is in charge of safety around here?",
  "There's a rabbit...",
  "There's a man...",
  "Is he the man?",
  "No! You the man!",
  "It's a regular fountain. If you were thirsty it would be great fountain.",
  "Here comes Peter Cottonta...",
  "Really?",
  "Really? You want to take it that far?",
  "No, stop the madness. It's just a rabbit.",
  "Well, maybe he does have a cottontail. But how would you know if his name is Peter?",
  "He's a dance, dance, dance, dance, dancing machine. Watch him get down, watch him get down!",
  "Is that the Charleston?",
  "He has one truly remarkable hat!",
  "Statues of people are always nice to see. There is a plaque below the statue with some choice words to live by.",
  "\"What would he do if he was here right now?\"",
  "Recently, boulders have been falling from the sky. It happens to the best of us.",
  "Those are evergreens. It's a tree for all seasons.",
  "Isn't that special. No, not really.",
  "Do we ever ask how the sky is doing?",
  "It's blue.",
  "There are clouds, but look at that mountain. The best view you're gonna get!",
  "So majestic.",
  "So picturesque.",
  "So pointless.",
  "It must lead somewhere.",
  "You feel that it's beneath you.",
  "Please, please don't eat the...",
  "No! Please no!",
  "Those words of wisdom should remain here for others to read.",
  "Hmmm, that was easy. Guess he has more hats.",
  "You try to thank the man for his hat...",
  "He just walks away.",
  "You try and talk with the dancing man...",
  "The dancing man abruptly interrupts you,",
  "\"Hey!",
  "\"I'm dancing here!",
  "\"I'm dancing here!!",
  "\"Sometimes, after a hard day, I just need to dance!\"",
  "\"My hat?\n\"My prized possession?\n\"Okay.\"",
  "If you want to get his hat, you should be closer to him.",
  "Do you see another hat?",
  "Do you feel you need more rabbits?",
  "You are not close enough.",
  "If you catch the rabbit, what will you put it in?",
  "You deftly scoop the rabbit into the hat.  "
];
CONTROLS[6] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4>9L>.!>45K5.!B<.{>45P5.lB96<.{<.,5U5.l6K6<.+<.!5E5U5.x6EBUAr5<!<.g5E59595U5.r6UR95EAKA95<x<.Z59595E5U5.r6^FE595K5<x<.Z5E5rG.Z6+5U5P5<x<.U5.4B.P6.g5<!<.P5.KBrWE6.l5<!<.K5.ZBPGZB.r5<!<.E5.rM<P5<!<.95>95<^<.E5>45<^<.E5>9A<x<.K5>E@.{<.K5>+5.{<.K5>+5.{<.K5>+5.{<.K5>+5.{<.K5>{5.+<.P5>+5.+<.P5>+5.+<.P5>+5.+<.P5>^5.{<.P5>^5.{<.P5>!5.,<.P5>!5.,<.K5>+A.+<.K5>,A.!<.K5>.9A!FrA<.K5>.KFPLKAKLE<.K5>.ZLrFZ<.E5><+<.E5><+<.E5><+<.95><{<.45.!_>Z<.45.x6{6>U<,5.x6.46>P<{5.!6.46>P<+5.^6.4B>K<^5.{6{G>K<xA.,.6>P<r5><.Z<l5><.g<ZA><.l<U5><.x<P5><.!<P5><.!<U5><.x<U5><.x<U5><.x<U5><.x<Z5><.r<Z5><.r<Z5><.r<g5><.l<g5><.l<g5><.l<Z5><.r<Z5><.r<Z5><.r<Z5><.r<U5><.x<U5><.x<P5><.!<P5><.!<P5><.!<K5><.^<K5><.^<E5><.+<E5><.+<E5><.+<95><.{<95><.{<45><.,<45><.,<45><.,.,5/4.,5/4.{5/9.{5/9.+5/E.+5/E.+5/E.^5/K.^5/K.!5/P.!5/P.!5/P.x5/U.x5/U.r5/Z.r5/Z.r5/Z.l5/g.l5/g.g5/l.g5/l.g5/l.Z5/r.Z5/r.Z5/r.U5/x.U5/x.P5/!.P5/!.P5/!.K5/^4mr5/+rm/{?4?4?4?4";
