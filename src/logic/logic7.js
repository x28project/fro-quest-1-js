window.logic7 = function() {
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
        if (!(cmd_isset(214))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_load_view(90);
        cmd_animate_obj(90);
        cmd_set_view(90, 90);
        cmd_set_loop(90, 0);
        cmd_set_cel(90, 0);
        cmd_position(90, 78, 101);
        cmd_set_priority(90, 11);
        cmd_stop_cycling(90);
        cmd_ignore_objs(90);
        cmd_draw(90);
        cmd_set(73);
      case 501:
        cmd_load_view(79);
        cmd_animate_obj(79);
        cmd_set_view(79, 79);
        if (!(!cmd_isset(185))) {
          jumpTo(502);
          break logicSwitch;
        }
        if (!(!cmd_isset(184))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_set_loop(79, 0);
        cmd_set_cel(79, 0);
      case 503:
        jumpTo(1);
        break logicSwitch;
      case 502:
        cmd_set_loop(79, 2);
        cmd_set_cel(79, 4);
        cmd_animate_obj(80);
        cmd_set_view(80, 79);
        cmd_set_loop(80, 3);
        cmd_set_cel(80, 0);
        cmd_set_priority(80, 4);
        cmd_position(80, 16, 120);
        cmd_ignore_blocks(80);
        cmd_ignore_objs(80);
        cmd_draw(80);
      case 1:
        cmd_set_priority(79, 10);
        cmd_position(79, 16, 120);
        cmd_ignore_blocks(79);
        cmd_ignore_objs(79);
        cmd_stop_cycling(79);
        cmd_draw(79);
        if (!(cmd_equaln(1, 14))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_set(41);
        cmd_load_view(91);
        cmd_animate_obj(91);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 9);
        cmd_set_cel(91, 0);
        cmd_position(91, 42, 84);
        cmd_stop_cycling(91);
        cmd_draw(91);
        jumpTo(2);
        break logicSwitch;
      case 504:
        cmd_load_sound(70);
        cmd_sound(70, 147);
      case 2:
        if (!(cmd_equaln(1, 6))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(80, 0);
        if (!(cmd_lessn(33, 94))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(33, 94);
        jumpTo(3);
        break logicSwitch;
      case 506:
        if (!(cmd_greatern(33, 154))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_assignn(33, 154);
      case 507:
      case 3:
        cmd_position_v(0, 80, 33);
        jumpTo(4);
        break logicSwitch;
      case 505:
        if (!(cmd_equaln(1, 13))) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_assignn(80, 159);
        if (!(cmd_lessn(33, 70))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_assignn(33, 70);
        jumpTo(5);
        break logicSwitch;
      case 509:
        if (!(cmd_greatern(33, 154))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_assignn(33, 154);
      case 510:
      case 5:
        cmd_position_v(0, 80, 33);
        jumpTo(4);
        break logicSwitch;
      case 508:
        if (!(cmd_equaln(1, 14))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        cmd_set(105);
        cmd_assignn(30, 117);
        cmd_assignn(31, 127);
        cmd_position_v(0, 30, 31);
        cmd_set(141);
        cmd_assignn(102, 0);
        cmd_assignn(103, 0);
        cmd_release_loop(0);
        jumpTo(4);
        break logicSwitch;
      case 511:
        cmd_position(0, 80, 134);
      case 4:
        if (!(!cmd_equaln(1, 14))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_draw(0);
      case 512:
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (cmd_equaln(1, 14)) {
            if (!cmd_isset(148)) {
              cmd_reset(147);
              cmd_sound(72, 147);
            }
            jumpTo(6);
            break logicSwitch;
          }
          cmd_reset(147);
          cmd_sound(70, 147);
        }
      case 6:
        if (cmd_isset(105)) {
          cmd_call(89, [2600]);
          if (AGI.break_all_logics) return;
        }
case 2600:
        if (!(cmd_said(15))) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_print(1);
jumptoLineArray = [2800];
jumpTo(2800, 7);
break logic;
case 2800:
        if (!(!cmd_isset(185))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_print(2);
jumptoLineArray = [2801];
jumpTo(2801, 7);
break logic;
case 2801:
        jumpTo(7);
        break logicSwitch;
      case 514:
        cmd_print(3);
jumptoLineArray = [2802];
jumpTo(2802, 7);
break logic;
case 2802:
      case 7:
        if (!(cmd_isset(214))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_print(4);
jumptoLineArray = [2803];
jumpTo(2803, 7);
break logic;
case 2803:
      case 515:
        if (!(cmd_isset(124))) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_print(5);
jumptoLineArray = [2804];
jumpTo(2804, 7);
break logic;
case 2804:
      case 516:
      case 513:
case 2805:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 79)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(185)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(6);
            cmd_print(7);
jumptoLineArray = [2805, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2805, 7);
break logic;
case 280000:
            jumpTo(8);
            break logicSwitch;
}
          }
          cmd_print(8);
jumptoLineArray = [2806];
jumpTo(2806, 7);
break logic;
}
        }
case 2806:
      case 8:
        if ((cmd_said(15, 79, 80) || cmd_said(15, 80))) {
          cmd_print(9);
jumptoLineArray = [2807];
jumpTo(2807, 7);
break logic;
        }
case 2807:
        if ((cmd_said(15, 79, 81) || cmd_said(15, 81))) {
          cmd_print(10);
jumptoLineArray = [2808];
jumpTo(2808, 7);
break logic;
        }
case 2808:
        if ((cmd_said(15, 79, 82) || cmd_said(15, 82))) {
          cmd_print(11);
jumptoLineArray = [2809];
jumpTo(2809, 7);
break logic;
        }
case 2809:
        if ((cmd_said(15, 79, 83) || cmd_said(15, 83))) {
          cmd_print(12);
jumptoLineArray = [2810];
jumpTo(2810, 7);
break logic;
        }
case 2810:
        if ((cmd_isset(185))) {
          if (((cmd_said(15, 79, 84) || cmd_said(15, 84)))) {
            cmd_print(13);
jumptoLineArray = [2811];
jumpTo(2811, 7);
break logic;
          }
        }
case 2811:
        if (cmd_said(15, 31)) {
          cmd_print(14);
jumptoLineArray = [2812];
jumpTo(2812, 7);
break logic;
        }
case 2812:
        if (cmd_said(15, 85)) {
          cmd_print(15);
jumptoLineArray = [2813];
jumpTo(2813, 7);
break logic;
        }
case 2813:
        if ((cmd_said(15, 33) || cmd_said(15, 86) || cmd_said(15, 33, 86))) {
          cmd_print(16);
jumptoLineArray = [2814];
jumpTo(2814, 7);
break logic;
        }
case 2814:
        if (cmd_said(46, 85)) {
          cmd_print(17);
jumptoLineArray = [2815];
jumpTo(2815, 7);
break logic;
        }
case 2815:
        if ((cmd_isset(214))) {
          if ((cmd_said(15, 87))) {
            cmd_print(18);
jumptoLineArray = [2816];
jumpTo(2816, 7);
break logic;
          }
        }
case 2816:
case 2817:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 43)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_isset(124)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(5);
jumptoLineArray = [2817, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2817, 7);
break logic;
case 280000:
            jumpTo(9);
            break logicSwitch;
}
          }
          cmd_print(19);
          cmd_print(20);
jumptoLineArray = [2818];
jumpTo(2818, 7);
break logic;
}
        }
case 2818:
      case 9:
        if (cmd_isset(124) && (cmd_said(15, 43, 19) || cmd_said(15, 19))) {
          cmd_print(5);
jumptoLineArray = [2819];
jumpTo(2819, 7);
break logic;
        }
case 2819:
        if (!((cmd_said(42, 78, 79) || cmd_said(42, 79, 78) || cmd_said(88, 78, 64, 79) || cmd_said(88, 78, 79)))) {
          jumpTo(517);
          break logicSwitch;
        }
        if (!(cmd_has("hat"))) {
          jumpTo(518);
          break logicSwitch;
        }
        if (!(cmd_isset(164))) {
          jumpTo(519);
          break logicSwitch;
        }
        if (!(cmd_posn(0, 10, 109, 36, 122))) {
          jumpTo(520);
          break logicSwitch;
        }
        cmd_move_obj(0, 14, 109, 1, 87);
        jumpTo(10);
        break logicSwitch;
      case 520:
        cmd_print(21);
jumptoLineArray = [2820];
jumpTo(2820, 7);
break logic;
case 2820:
      case 10:
        jumpTo(11);
        break logicSwitch;
      case 519:
        cmd_print(22);
        cmd_print(23);
jumptoLineArray = [2821];
jumpTo(2821, 7);
break logic;
case 2821:
      case 11:
        jumpTo(12);
        break logicSwitch;
      case 518:
        cmd_print(24);
jumptoLineArray = [2822];
jumpTo(2822, 7);
break logic;
case 2822:
      case 517:
      case 12:
        if (cmd_isset(87)) {
          cmd_reset(87);
          cmd_load_view(68);
          cmd_animate_obj(1);
          cmd_set_view(1, 68);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_get_posn(0, 30, 31);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_increment(84);
          cmd_set_priority_v(1, 84);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 88);
        }
        if (cmd_isset(88)) {
          cmd_reset(88);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 89);
          cmd_set_loop(79, 1);
          cmd_set_cel(79, 0);
          cmd_drop("hat");
          cmd_print(25);
jumptoLineArray = [2823];
jumpTo(2823, 7);
break logic;
        }
case 2823:
case 2824:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(89)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(89);
          cmd_print(26);
          cmd_print(27);
          cmd_print(28);
          cmd_print(29);
          cmd_print(30);
          cmd_print(31);
          cmd_print(32);
jumptoLineArray = [2824, 28000];
ifSkipArray = [true];
jumpTo(2824, 7);
break logic;
case 28000:
          if (!cmd_isset(184)) {
            cmd_set(184);
            cmd_increment(3);
          }
          cmd_assignn(72, 0);
          cmd_assignn(73, 0);
          cmd_set_loop(0, 0);
          cmd_set_cel(0, 3);
          cmd_erase(1);
          cmd_draw(0);
}
        }
        if (!(cmd_isset(184) && !cmd_isset(185))) {
          jumpTo(521);
          break logicSwitch;
        }
        if (!(cmd_greatern(73, 0) && cmd_lessn(73, 37))) {
          jumpTo(522);
          break logicSwitch;
        }
        if (!(!cmd_greatern(73, 31))) {
          jumpTo(523);
          break logicSwitch;
        }
        cmd_set_loop(79, 1);
        cmd_set_cel_v(79, 73);
        jumpTo(13);
        break logicSwitch;
      case 523:
        cmd_set_loop(79, 2);
        cmd_assignv(101, 73);
        cmd_subn(101, 32);
        cmd_set_cel_v(79, 101);
        if (!(cmd_equaln(101, 4))) {
          jumpTo(524);
          break logicSwitch;
        }
        cmd_animate_obj(80);
        cmd_set_view(80, 79);
        cmd_set_loop(80, 3);
        cmd_set_cel(80, 0);
        cmd_set_priority(80, 4);
        cmd_position(80, 16, 120);
        cmd_ignore_blocks(80);
        cmd_ignore_objs(80);
        cmd_draw(80);
      case 524:
      case 13:
        jumpTo(14);
        break logicSwitch;
      case 522:
        if (!(!cmd_lessn(73, 37))) {
          jumpTo(525);
          break logicSwitch;
        }
        cmd_set_loop(79, 2);
        cmd_set_cel(79, 4);
        cmd_animate_obj(80);
        cmd_set_view(80, 79);
        cmd_set_loop(80, 3);
        cmd_set_cel(80, 0);
        cmd_set_priority(80, 4);
        cmd_position(80, 16, 120);
        cmd_draw(80);
        if (!(!cmd_isset(185))) {
          jumpTo(526);
          break logicSwitch;
        }
        cmd_set(185);
        cmd_increment(3);
      case 526:
      case 525:
      case 521:
      case 14:
        if (!cmd_isset(185) && cmd_isset(184) && cmd_said(50, 78)) {
          cmd_print(33);
jumptoLineArray = [2825];
jumpTo(2825, 7);
break logic;
        }
case 2825:
        if (cmd_isset(185) && cmd_said(50, 78)) {
          cmd_print(34);
jumptoLineArray = [2826];
jumpTo(2826, 7);
break logic;
        }
case 2826:
        if ((cmd_said(50, 79) || cmd_said(50, 79))) {
          cmd_print(35);
jumptoLineArray = [2827];
jumpTo(2827, 7);
break logic;
        }
case 2827:
        if ((cmd_said(50, 79, 81) || cmd_said(50, 81) || cmd_said(50, 79, 89) || cmd_said(50, 89))) {
          cmd_print(36);
jumptoLineArray = [2828];
jumpTo(2828, 7);
break logic;
        }
case 2828:
        if ((cmd_said(50, 79, 80) || cmd_said(50, 80) || cmd_said(50, 79, 90) || cmd_said(50, 90))) {
          cmd_print(37);
jumptoLineArray = [2829];
jumpTo(2829, 7);
break logic;
        }
case 2829:
        if ((cmd_said(50, 79, 82) || cmd_said(50, 82) || cmd_said(50, 79, 91) || cmd_said(50, 91))) {
          cmd_print(37);
jumptoLineArray = [2830];
jumpTo(2830, 7);
break logic;
        }
case 2830:
        if ((cmd_said(50, 79, 83) || cmd_said(50, 83))) {
          cmd_print(38);
jumptoLineArray = [2831];
jumpTo(2831, 7);
break logic;
        }
case 2831:
        if ((cmd_said(50, 79, 83) || cmd_said(50, 83))) {
          cmd_print(38);
jumptoLineArray = [2832];
jumpTo(2832, 7);
break logic;
        }
case 2832:
        if (!(cmd_said(50, 43))) {
          jumpTo(527);
          break logicSwitch;
        }
        if (!(!cmd_isset(124))) {
          jumpTo(528);
          break logicSwitch;
        }
        if (!(cmd_has("water elemental"))) {
          jumpTo(529);
          break logicSwitch;
        }
        cmd_print(39);
jumptoLineArray = [2833];
jumpTo(2833, 7);
break logic;
case 2833:
        jumpTo(15);
        break logicSwitch;
      case 529:
        cmd_print(40);
jumptoLineArray = [2834];
jumpTo(2834, 7);
break logic;
case 2834:
      case 15:
        jumpTo(16);
        break logicSwitch;
      case 528:
        cmd_set(90);
      case 527:
      case 16:
case 2835:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(50, 43, 19) || cmd_said(50, 19) || cmd_said(50, 43, 19, 92) || cmd_said(50, 19, 92) || cmd_said(50, 43, 19, 93, 92) || cmd_said(50, 19, 93, 92) || cmd_isset(90))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(90);
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(124)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(41);
jumptoLineArray = [2835, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2835, 7);
break logic;
case 280000:
            jumpTo(17);
            break logicSwitch;
}
          }
case 28001:
ifSkip = ifSkipArrayShift();
          if ((cmd_has("water elemental")) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(39);
jumptoLineArray = [2835, 28001, 280000];
ifSkipArray = [true, true];
jumpTo(2835, 7);
break logic;
case 280000:
            jumpTo(17);
            break logicSwitch;
}
          }
case 28002:
ifSkip = ifSkipArrayShift();
          if ((!cmd_has("empty glass")) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(42);
jumptoLineArray = [2835, 28002, 280000];
ifSkipArray = [true, true];
jumpTo(2835, 7);
break logic;
case 280000:
            jumpTo(17);
            break logicSwitch;
}
          }
          if (cmd_posn(0, 10, 109, 36, 122)) {
            cmd_move_obj(0, 30, 109, 1, 93);
            jumpTo(17);
            break logicSwitch;
          }
          cmd_print(43);
jumptoLineArray = [2838];
jumpTo(2838, 7);
break logic;
}
        }
case 2838:
      case 17:
        if (cmd_isset(93)) {
          cmd_reset(93);
          cmd_program_control();
          cmd_prevent_input();
          cmd_set_loop(0, 1);
          cmd_set_cel(0, 3);
          cmd_get_posn(0, 30, 31);
          cmd_load_view(66);
          cmd_set_view(1, 66);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_subn(30, 4);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_increment(84);
          cmd_set_priority_v(1, 84);
          cmd_normal_cycle(1);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_assignn(91, 4);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(1, 100);
          cmd_set(94);
        }
        if (cmd_isset(94)) {
          cmd_current_cel(1, 87);
          if (cmd_equaln(87, 8)) {
            cmd_reset(94);
            cmd_stop_cycling(1);
            cmd_drop("empty glass");
            cmd_get("not-so-empty glass");
            cmd_set(92);
            cmd_set_loop(254, 0);
            cmd_last_cel(254, 88);
            cmd_set_cel_v(254, 88);
            cmd_reverse_loop(254, 133);
          }
        }
case 2839:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(92) && cmd_isset(133)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(92);
          cmd_erase(254);
          cmd_get("water elemental");
          if (!cmd_isset(187)) {
            cmd_set(187);
            cmd_increment(3);
          }
          cmd_show_obj(238);
jumptoLineArray = [2839, 28000];
ifSkipArray = [true];
jumpTo(2839, 7);
break logic;
case 28000:
          cmd_start_cycling(1);
          cmd_end_of_loop(1, 91);
}
        }
        if (cmd_isset(91)) {
          cmd_reset(91);
          cmd_reset(124);
          cmd_erase(1);
          cmd_draw(0);
          cmd_accept_input();
          cmd_player_control();
        }
case 2840:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(183)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(183);
          cmd_print(44);
jumptoLineArray = [2840, 28000];
ifSkipArray = [true];
jumpTo(2840, 7);
break logic;
case 28000:
          cmd_load_sound(72);
          cmd_sound(72, 147);
          cmd_print(45);
jumptoLineArray = [2841];
jumpTo(2841, 7);
break logic;
}
        }
case 2841:
        if ((cmd_isset(214) && cmd_said(94, 87))) {
          if (!cmd_isset(73) && !cmd_isset(70)) {
            cmd_assignn(80, 2);
            cmd_cycle_time(90, 80);
            cmd_normal_cycle(90);
            cmd_end_of_loop(90, 70);
            cmd_set(72);
            jumpTo(18);
            break logicSwitch;
          }
          if ((cmd_isset(73))) {
            cmd_print(46);
jumptoLineArray = [2842];
jumpTo(2842, 7);
break logic;
          }
        }
case 2842:
      case 18:
        if (cmd_isset(70)) {
          cmd_get_posn(0, 30, 31);
          if (cmd_isset(71) && !cmd_greatern(31, 120)) {
            cmd_set_loop(90, 1);
            cmd_normal_cycle(90);
            cmd_reset(71);
            cmd_set(72);
            jumpTo(19);
            break logicSwitch;
          }
          if (cmd_isset(72) && cmd_greatern(31, 120)) {
            cmd_set_loop(90, 2);
            cmd_normal_cycle(90);
            cmd_reset(72);
            cmd_set(71);
          }
        }
      case 19:
case 2843:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(214) && cmd_said(95, 87)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_isset(188)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(47);
jumptoLineArray = [2843, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2843, 7);
break logic;
case 280000:
            jumpTo(20);
            break logicSwitch;
}
          }
case 28001:
ifSkip = ifSkipArrayShift();
          if ((cmd_posn(0, 82, 122, 92, 126)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(48);
            cmd_print(49);
            cmd_print(50);
            cmd_print(51);
            cmd_print(52);
            cmd_print(53);
jumptoLineArray = [2843, 28001, 280000];
ifSkipArray = [true, true];
jumpTo(2843, 7);
break logic;
case 280000:
            cmd_set(82);
            if (!cmd_isset(188)) {
              cmd_set(188);
              cmd_increment(3);
            }
            jumpTo(20);
            break logicSwitch;
}
          }
case 28002:
ifSkip = ifSkipArrayShift();
          if ((cmd_posn(0, 0, 0, 159, 120)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(54);
jumptoLineArray = [2843, 28002, 280000];
ifSkipArray = [true, true];
jumpTo(2843, 7);
break logic;
case 280000:
            jumpTo(20);
            break logicSwitch;
}
          }
          cmd_print(55);
jumptoLineArray = [2846];
jumpTo(2846, 7);
break logic;
}
        }
case 2846:
      case 20:
case 2847:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(82)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(82);
          cmd_program_control();
          cmd_prevent_input();
          cmd_stop_motion(0);
          cmd_load_view(91);
          cmd_animate_obj(91);
          cmd_set_view(91, 91);
          cmd_set_loop(91, 7);
          cmd_position(91, 42, 82);
          cmd_stop_cycling(91);
          cmd_assignn(80, 1);
          cmd_cycle_time(91, 80);
          cmd_ignore_objs(91);
          cmd_shake_screen(2);
          cmd_print(56);
jumptoLineArray = [2847, 28000];
ifSkipArray = [true];
jumpTo(2847, 7);
break logic;
case 28000:
          cmd_draw(91);
          cmd_end_of_loop(91, 80);
          cmd_load_sound(71);
          cmd_sound(71, 147);
}
        }
        if (cmd_isset(80)) {
          cmd_reset(80);
          cmd_set_loop(91, 2);
          cmd_set_cel(91, 0);
          cmd_assignn(80, 4);
          cmd_cycle_time(91, 80);
          cmd_ignore_objs(91);
          cmd_draw(91);
          cmd_end_of_loop(91, 74);
          cmd_fix_loop(0);
          cmd_set_loop(0, 1);
          cmd_reverse_cycle(0);
          cmd_move_obj(0, 120, 142, 1, 83);
        }
        if (cmd_isset(74) && cmd_isset(83)) {
          cmd_reset(74);
          cmd_set_loop(91, 3);
          cmd_set_cel(91, 0);
          cmd_load_view(204);
          cmd_animate_obj(204);
          cmd_set_view(204, 204);
          cmd_set_loop(204, 1);
          cmd_set_cel(204, 0);
          cmd_position(204, 5, 67);
          cmd_set_priority(204, 15);
          cmd_ignore_objs(204);
          cmd_assignn(91, 2);
          cmd_cycle_time(204, 91);
          cmd_draw(204);
          cmd_assignn(77, 0);
          cmd_end_of_loop(204, 121);
        }
        if (cmd_isset(75)) {
          cmd_reset(75);
          cmd_set_loop(91, 4);
          cmd_set_cel(91, 0);
          cmd_assignn(80, 2);
          cmd_cycle_time(91, 80);
          cmd_end_of_loop(91, 76);
        }
        if (cmd_isset(76)) {
          cmd_reset(76);
          cmd_set_loop(91, 5);
          cmd_set_cel(91, 0);
          cmd_position(91, 40, 82);
          cmd_assignn(80, 4);
          cmd_cycle_time(91, 80);
          cmd_end_of_loop(91, 84);
          cmd_set(40);
        }
        if (cmd_isset(40)) {
          cmd_current_cel(91, 87);
          if (cmd_equaln(87, 8)) {
            cmd_assignn(91, 1);
            cmd_cycle_time(91, 91);
            jumpTo(21);
            break logicSwitch;
          }
          if (cmd_equaln(87, 14)) {
            cmd_assignn(91, 4);
            cmd_cycle_time(91, 91);
            cmd_reset(40);
          }
        }
      case 21:
        if (cmd_isset(84)) {
          cmd_reset(84);
          cmd_set_loop(204, 2);
          cmd_set_cel(204, 0);
          cmd_assignn(91, 4);
          cmd_cycle_time(204, 91);
          cmd_assignn(77, 1);
          cmd_draw(204);
          cmd_end_of_loop(204, 121);
        }
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_set_loop(91, 8);
          cmd_set_cel(91, 0);
          cmd_end_of_loop(91, 85);
        }
        if (cmd_isset(85)) {
          cmd_reset(85);
          cmd_set_loop(91, 6);
          cmd_set_cel(91, 0);
          cmd_end_of_loop(91, 78);
        }
case 2848:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(78)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(78);
          cmd_drop("pick");
          cmd_print(57);
          cmd_print(58);
jumptoLineArray = [2848, 28000];
ifSkipArray = [true];
jumpTo(2848, 7);
break logic;
case 28000:
          cmd_load_view(7);
          cmd_animate_obj(1);
          cmd_set_view(1, 7);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_ignore_objs(1);
          cmd_get_posn(0, 30, 31);
          cmd_decrement(30);
          cmd_position_v(1, 30, 31);
          cmd_assignn(91, 4);
          cmd_cycle_time(1, 91);
          cmd_erase(0);
          cmd_draw(1);
          cmd_end_of_loop(1, 81);
}
        }
        if (!(cmd_isset(121))) {
          jumpTo(530);
          break logicSwitch;
        }
        if (!(cmd_equaln(77, 0))) {
          jumpTo(531);
          break logicSwitch;
        }
        cmd_print(59);
jumptoLineArray = [2849];
jumpTo(2849, 7);
break logic;
case 2849:
        cmd_end_of_loop(91, 75);
        cmd_assignn(77, 9);
        jumpTo(22);
        break logicSwitch;
      case 531:
        if (!(cmd_equaln(77, 1))) {
          jumpTo(532);
          break logicSwitch;
        }
        cmd_print(60);
jumptoLineArray = [2850];
jumpTo(2850, 7);
break logic;
case 2850:
        cmd_assignn(91, 2);
        cmd_cycle_time(204, 91);
        jumpTo(22);
        break logicSwitch;
      case 532:
        if (!(cmd_equaln(77, 2))) {
          jumpTo(533);
          break logicSwitch;
        }
        cmd_print(61);
jumptoLineArray = [2851];
jumpTo(2851, 7);
break logic;
case 2851:
        cmd_end_of_loop(91, 77);
        jumpTo(22);
        break logicSwitch;
      case 533:
        if (!(cmd_equaln(77, 3))) {
          jumpTo(534);
          break logicSwitch;
        }
        cmd_print(60);
jumptoLineArray = [2852];
jumpTo(2852, 7);
break logic;
case 2852:
        cmd_set_loop(204, 1);
        cmd_set_cel(204, 0);
        cmd_assignn(91, 2);
        cmd_cycle_time(204, 91);
        jumpTo(22);
        break logicSwitch;
      case 534:
        if (!(cmd_equaln(77, 4))) {
          jumpTo(535);
          break logicSwitch;
        }
        cmd_print(62);
jumptoLineArray = [2853];
jumpTo(2853, 7);
break logic;
case 2853:
        cmd_set(60);
      case 535:
      case 22:
        if (!(!cmd_equaln(77, 9))) {
          jumpTo(536);
          break logicSwitch;
        }
        if (!((cmd_equaln(77, 2) || cmd_equaln(77, 4)))) {
          jumpTo(537);
          break logicSwitch;
        }
        cmd_assignn(77, 0);
        cmd_reset(121);
        cmd_erase(204);
        jumpTo(23);
        break logicSwitch;
      case 537:
        cmd_reset(121);
        cmd_set_loop(204, 3);
        cmd_set_cel(204, 0);
        cmd_assignn(91, 2);
        cmd_cycle_time(1, 91);
        cmd_end_of_loop(204, 122);
        cmd_increment(77);
      case 23:
        jumpTo(24);
        break logicSwitch;
      case 536:
        cmd_erase(204);
      case 530:
      case 24:
        if (cmd_isset(122)) {
          cmd_reset(122);
          cmd_set_loop(204, 1);
          cmd_set_cel(204, 0);
          cmd_assignn(91, 2);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(204, 121);
        }
case 2854:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(81)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(81);
          if (!cmd_isset(182)) {
            cmd_set(182);
            cmd_increment(3);
          }
          cmd_print(63);
          cmd_print(64);
          cmd_print(65);
          cmd_print(66);
jumptoLineArray = [2854, 28000];
ifSkipArray = [true];
jumpTo(2854, 7);
break logic;
case 28000:
          cmd_erase(1);
          cmd_new_room(14);
          if (AGI.break_all_logics) return;
}
        }
        if (cmd_isset(41) && !cmd_isset(42) && cmd_posn(0, 0, 0, 85, 120)) {
          cmd_program_control();
          cmd_prevent_input();
          cmd_set(42);
          cmd_set_loop(91, 10);
          cmd_set_cel(91, 0);
          cmd_assignn(6, 0);
          cmd_end_of_loop(91, 100);
        }
        if (cmd_isset(42)) {
          cmd_current_loop(91, 86);
          cmd_current_cel(91, 87);
          if (cmd_equaln(86, 10) && cmd_equaln(87, 4)) {
            cmd_set(43);
          }
        }
        if (!(cmd_isset(43))) {
          jumpTo(538);
          break logicSwitch;
        }
        cmd_reset(43);
        cmd_load_view(65);
        cmd_animate_obj(1);
        cmd_set_view(1, 65);
        if (!(cmd_posn(0, 0, 0, 80, 120))) {
          jumpTo(539);
          break logicSwitch;
        }
        if (!(cmd_isset(140))) {
          jumpTo(540);
          break logicSwitch;
        }
        cmd_set_loop(1, 4);
        cmd_assignn(108, 250);
        jumpTo(25);
        break logicSwitch;
      case 540:
        cmd_set_loop(1, 1);
      case 25:
        jumpTo(26);
        break logicSwitch;
      case 539:
        if (!(cmd_isset(140))) {
          jumpTo(541);
          break logicSwitch;
        }
        cmd_set_loop(1, 3);
        cmd_assignn(108, 0);
        jumpTo(26);
        break logicSwitch;
      case 541:
        cmd_set_loop(1, 0);
      case 26:
        cmd_set_cel(1, 0);
        cmd_ignore_objs(1);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(1, 84);
        cmd_get_posn(0, 30, 31);
        if (!(cmd_posn(0, 0, 0, 80, 120))) {
          jumpTo(542);
          break logicSwitch;
        }
        cmd_addn(31, 6);
      case 542:
        cmd_position_v(1, 30, 31);
        cmd_stop_cycling(1);
        cmd_erase(0);
        cmd_draw(1);
        cmd_end_of_loop(1, 44);
      case 538:
        if (!(cmd_isset(44))) {
          jumpTo(543);
          break logicSwitch;
        }
        cmd_reset(44);
        if (!(cmd_isset(140))) {
          jumpTo(544);
          break logicSwitch;
        }
        cmd_set_loop(1, 5);
        jumpTo(27);
        break logicSwitch;
      case 544:
        cmd_set_loop(1, 2);
      case 27:
        cmd_set_cel(1, 0);
        cmd_get_posn(1, 30, 31);
        cmd_addn(30, 5);
        cmd_position_v(1, 30, 31);
        cmd_end_of_loop(1, 45);
      case 543:
        if (!(cmd_isset(45))) {
          jumpTo(545);
          break logicSwitch;
        }
        cmd_reset(45);
        cmd_reset(42);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        cmd_get_posn(1, 30, 31);
        cmd_increment(30);
        cmd_position_v(0, 30, 31);
        cmd_erase(1);
        cmd_draw(0);
        if (!(cmd_isset(140))) {
          jumpTo(546);
          break logicSwitch;
        }
        if (!(cmd_equaln(108, 0))) {
          jumpTo(547);
          break logicSwitch;
        }
        cmd_move_obj(0, 118, 84, 1, 68);
        jumpTo(28);
        break logicSwitch;
      case 547:
        if (!(cmd_equaln(108, 250))) {
          jumpTo(548);
          break logicSwitch;
        }
        cmd_move_obj(0, 118, 128, 1, 68);
      case 548:
      case 28:
        jumpTo(29);
        break logicSwitch;
      case 546:
        cmd_player_control();
        cmd_accept_input();
      case 545:
      case 29:
        if (!(cmd_isset(68))) {
          jumpTo(549);
          break logicSwitch;
        }
        if (!(cmd_equaln(108, 0))) {
          jumpTo(550);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        cmd_increment(108);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        jumpTo(30);
        break logicSwitch;
      case 550:
        if (!(cmd_equaln(108, 1))) {
          jumpTo(551);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_view(1, 15);
        cmd_set_loop(1, 4);
        cmd_set_cel(1, 0);
        cmd_ignore_objs(1);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(1, 84);
        cmd_subn(30, 13);
        cmd_position_v(1, 30, 31);
        cmd_erase(0);
        cmd_draw(1);
        cmd_reset(68);
        cmd_end_of_loop(1, 68);
      case 551:
        if (!(cmd_isset(68) && cmd_equaln(108, 2))) {
          jumpTo(552);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(1, 5);
        cmd_set_cel(1, 0);
        cmd_get_posn(1, 82, 83);
        cmd_subn(82, 5);
        cmd_position_v(1, 82, 83);
        cmd_reset(68);
        cmd_start_cycling(1);
        cmd_subn(82, 14);
        cmd_assignn(92, 1);
        cmd_move_obj_v(1, 82, 83, 92, 68);
      case 552:
        if (!(cmd_isset(68) && cmd_equaln(108, 3))) {
          jumpTo(553);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(1, 6);
        cmd_set_cel(1, 0);
        cmd_get_priority(91, 84);
        cmd_increment(84);
        cmd_set_priority_v(1, 84);
        cmd_get_posn(1, 82, 83);
        cmd_decrement(82);
        cmd_position_v(1, 82, 83);
        cmd_start_cycling(1);
        cmd_reset(68);
        cmd_move_obj(1, 44, 84, 3, 68);
        cmd_animate_obj(91);
        cmd_load_view(94);
        cmd_set_view(91, 94);
        cmd_set_loop(91, 2);
        cmd_set_cel(91, 0);
        cmd_end_of_loop(91, 100);
      case 553:
        if (!(cmd_isset(68) && cmd_equaln(108, 4))) {
          jumpTo(554);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_reset(68);
        cmd_move_obj(1, 44, 84, 1, 68);
      case 554:
        if (!(cmd_isset(68) && cmd_equaln(108, 5))) {
          jumpTo(555);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(1, 7);
        cmd_set_cel(1, 0);
        cmd_stop_cycling(1);
        cmd_end_of_loop(1, 68);
        cmd_set_loop(91, 3);
        cmd_set_cel(91, 0);
        cmd_end_of_loop(91, 100);
      case 555:
        if (!(cmd_isset(68) && cmd_equaln(108, 6))) {
          jumpTo(556);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(1, 8);
        cmd_set_cel(1, 0);
        cmd_end_of_loop(1, 68);
      case 556:
        if (!(cmd_isset(68) && cmd_equaln(108, 7))) {
          jumpTo(557);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_erase(1);
        cmd_set_loop(91, 4);
        cmd_set_cel(91, 0);
        cmd_end_of_loop(91, 100);
      case 557:
        if (!(cmd_isset(68) && !cmd_lessn(108, 8) && cmd_lessn(108, 50))) {
          jumpTo(558);
          break logicSwitch;
        }
        cmd_increment(108);
      case 558:
        if (!(cmd_isset(68) && cmd_equaln(108, 50))) {
          jumpTo(559);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(91, 5);
        cmd_set_cel(91, 0);
        cmd_get_posn(91, 82, 83);
        cmd_subn(82, 14);
        cmd_addn(83, 2);
        cmd_position_v(91, 82, 83);
        cmd_reset(68);
        cmd_end_of_loop(91, 68);
        cmd_get("pick");
        cmd_load_sound(101);
        cmd_sound(101, 147);
        cmd_set(148);
        cmd_shake_screen(2);
      case 559:
        if (!(cmd_isset(68) && cmd_equaln(108, 51))) {
          jumpTo(560);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(91, 6);
        cmd_set_cel(91, 0);
        cmd_reset(68);
        cmd_end_of_loop(91, 68);
      case 560:
        if (!(cmd_isset(68) && cmd_equaln(108, 52))) {
          jumpTo(561);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(91, 7);
        cmd_set_cel(91, 0);
        cmd_reset(68);
        cmd_end_of_loop(91, 68);
      case 561:
        if (!(cmd_isset(68) && cmd_equaln(108, 53))) {
          jumpTo(562);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(91, 8);
        cmd_set_cel(91, 0);
        cmd_reset(68);
        cmd_end_of_loop(91, 68);
      case 562:
        if (!(cmd_isset(68) && cmd_equaln(108, 54))) {
          jumpTo(563);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_get_posn(91, 82, 83);
        cmd_addn(82, 13);
        cmd_subn(83, 2);
        cmd_position_v(0, 82, 83);
        cmd_erase(91);
        cmd_set_view(0, 0);
        cmd_draw(0);
        cmd_reset(68);
        cmd_addn(82, 41);
        cmd_subn(83, 7);
        cmd_assignn(92, 1);
        cmd_move_obj_v(0, 82, 83, 92, 68);
        cmd_reset(41);
      case 563:
        if (!(cmd_isset(68) && cmd_equaln(108, 55))) {
          jumpTo(564);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(0, 2);
        cmd_set_cel(0, 0);
        cmd_load_view(22);
        cmd_animate_obj(21);
        cmd_set_view(21, 22);
        cmd_set_loop(21, 2);
        cmd_set_cel(21, 0);
        cmd_position(21, 0, 126);
        cmd_set_priority(21, 11);
        cmd_ignore_objs(21);
        cmd_draw(21);
        cmd_reset(68);
        cmd_end_of_loop(21, 68);
      case 564:
        if (!(cmd_isset(68) && cmd_equaln(108, 56))) {
          jumpTo(565);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set(66);
        cmd_assignn(106, 255);
        cmd_reset(68);
      case 565:
        if (!(cmd_isset(68) && !cmd_lessn(108, 57) && cmd_lessn(108, 100))) {
          jumpTo(566);
          break logicSwitch;
        }
        cmd_increment(108);
      case 566:
        if (!(cmd_isset(68) && cmd_equaln(108, 100))) {
          jumpTo(567);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(90, 6);
        cmd_set_cel(90, 0);
        cmd_assignn(91, 3);
        cmd_cycle_time(90, 91);
        cmd_reset(68);
        cmd_end_of_loop(90, 68);
      case 567:
        if (!(cmd_isset(68) && cmd_equaln(108, 101))) {
          jumpTo(568);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(90, 7);
        cmd_set_cel(90, 0);
        cmd_start_cycling(90);
      case 568:
        if (!(cmd_isset(68) && !cmd_lessn(108, 102) && cmd_lessn(108, 150))) {
          jumpTo(569);
          break logicSwitch;
        }
        cmd_increment(108);
      case 569:
        if (!(cmd_isset(68) && cmd_equaln(108, 150))) {
          jumpTo(570);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_reset(68);
        cmd_reverse_loop(1, 68);
      case 570:
        if (!(cmd_isset(68) && cmd_equaln(108, 151))) {
          jumpTo(571);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        cmd_erase(1);
        cmd_draw(0);
      case 571:
        if (!(cmd_isset(68) && !cmd_lessn(108, 152) && cmd_lessn(108, 200))) {
          jumpTo(572);
          break logicSwitch;
        }
        cmd_increment(108);
      case 572:
        if (!(cmd_isset(68) && cmd_equaln(108, 200))) {
          jumpTo(573);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_reset(68);
        cmd_move_obj(0, 118, 123, 1, 68);
      case 573:
        if (!(cmd_isset(68) && cmd_equaln(108, 201))) {
          jumpTo(574);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_reset(68);
        cmd_move_obj(0, 44, 123, 1, 68);
      case 574:
        if (!(cmd_isset(68) && cmd_equaln(108, 202))) {
          jumpTo(575);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_view(1, 94);
        cmd_set_loop(1, 9);
        cmd_set_cel(1, 0);
        cmd_ignore_objs(1);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(1, 84);
        cmd_position_v(1, 30, 31);
        cmd_erase(0);
        cmd_draw(1);
        cmd_stop_cycling(90);
        cmd_reset(68);
        cmd_reverse_loop(90, 68);
      case 575:
        if (!(cmd_isset(68) && cmd_equaln(108, 203))) {
          jumpTo(576);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_set_loop(90, 6);
        cmd_set_cel(90, 3);
        cmd_reset(68);
        cmd_reverse_loop(90, 68);
      case 576:
        if (!(cmd_isset(68) && cmd_equaln(108, 204))) {
          jumpTo(577);
          break logicSwitch;
        }
        cmd_current_cel(81, 87);
        if (!(cmd_equaln(87, 0))) {
          jumpTo(578);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_animate_obj(85);
        cmd_load_view(153);
        cmd_animate_obj(85);
        cmd_set_view(85, 153);
        cmd_set_loop(85, 6);
        cmd_set_cel(85, 0);
        cmd_position(85, 43, 86);
        cmd_get_priority(21, 84);
        cmd_set_priority_v(85, 84);
        cmd_ignore_blocks(85);
        cmd_ignore_objs(85);
        cmd_start_cycling(85);
        cmd_draw(85);
      case 578:
      case 577:
        if (!(cmd_isset(68) && cmd_equaln(108, 205))) {
          jumpTo(579);
          break logicSwitch;
        }
        cmd_current_cel(81, 87);
        if (!(cmd_equaln(87, 15))) {
          jumpTo(580);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_animate_obj(86);
        cmd_load_view(153);
        cmd_animate_obj(86);
        cmd_set_view(86, 153);
        cmd_set_loop(86, 6);
        cmd_set_cel(86, 0);
        cmd_position(86, 43, 86);
        cmd_get_priority(21, 84);
        cmd_set_priority_v(86, 84);
        cmd_ignore_blocks(86);
        cmd_ignore_objs(86);
        cmd_start_cycling(86);
        cmd_draw(86);
        cmd_set(97);
      case 580:
      case 579:
      case 30:
        if (!(cmd_equaln(108, 250))) {
          jumpTo(581);
          break logicSwitch;
        }
        cmd_increment(108);
        cmd_reset(68);
        cmd_move_obj(0, 118, 84, 1, 68);
      case 581:
        if (!(cmd_isset(68) && cmd_equaln(108, 251))) {
          jumpTo(582);
          break logicSwitch;
        }
        cmd_assignn(108, 0);
      case 582:
      case 549:
        if (!cmd_isset(140) && cmd_equaln(1, 14) && cmd_lessn(103, 4) && cmd_lessn(102, 250)) {
          cmd_increment(102);
        }
        if (!cmd_isset(140) && cmd_equaln(1, 14) && cmd_lessn(103, 4) && cmd_equaln(102, 250)) {
          cmd_assignn(102, 0);
          cmd_increment(103);
        }
        if (!cmd_isset(140) && cmd_equaln(1, 14) && cmd_equaln(103, 4)) {
          cmd_increment(103);
          cmd_set(46);
        }
        if (!cmd_isset(140) && cmd_isset(46) && cmd_equaln(103, 5) && !cmd_isset(42)) {
          cmd_reset(46);
          cmd_program_control();
          cmd_prevent_input();
          cmd_load_view(22);
          cmd_animate_obj(21);
          cmd_set_view(21, 22);
          cmd_set_loop(21, 2);
          cmd_set_cel(21, 0);
          cmd_position(21, 0, 126);
          cmd_set_priority(21, 11);
          cmd_ignore_objs(21);
          cmd_draw(21);
          cmd_end_of_loop(21, 47);
          if (cmd_lessn(30, 46) && cmd_greatern(31, 120)) {
            cmd_assignn(6, 3);
          }
        }
        if (!(cmd_isset(155))) {
          jumpTo(583);
          break logicSwitch;
        }
        if (!(cmd_isset(47))) {
          jumpTo(584);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_greatern(30, 46))) {
          jumpTo(585);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
      case 585:
        cmd_reset(47);
        cmd_set_view(21, 22);
        cmd_set_loop(21, 4);
        cmd_set_cel(21, 0);
        cmd_position(21, 13, 127);
        cmd_assignn(91, 2);
        cmd_cycle_time(21, 91);
        cmd_end_of_loop(21, 50);
        cmd_set(50);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 11);
        cmd_set_cel(91, 0);
        cmd_position(91, 42, 84);
        cmd_assignn(91, 2);
        cmd_cycle_time(91, 91);
        cmd_end_of_loop(91, 100);
      case 584:
        if (!(cmd_isset(50))) {
          jumpTo(586);
          break logicSwitch;
        }
        cmd_current_cel(21, 87);
        if (!(cmd_lessn(87, 5))) {
          jumpTo(587);
          break logicSwitch;
        }
        jumpTo(31);
        break logicSwitch;
      case 587:
        if (!(cmd_equaln(87, 5))) {
          jumpTo(588);
          break logicSwitch;
        }
        cmd_reset(50);
        cmd_reset(147);
        cmd_load_sound(103);
        cmd_sound(103, 147);
        cmd_set(148);
        jumpTo(31);
        break logicSwitch;
      case 588:
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_greatern(30, 46))) {
          jumpTo(589);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
      case 589:
        cmd_reset(50);
        cmd_set_loop(21, 5);
        cmd_set_cel(21, 0);
        cmd_position(21, 13, 123);
        cmd_assignn(91, 1);
        cmd_cycle_time(21, 91);
        cmd_end_of_loop(21, 57);
      case 586:
      case 31:
        if (!(cmd_isset(57))) {
          jumpTo(590);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_greatern(30, 46))) {
          jumpTo(591);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
      case 591:
        cmd_reset(57);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 12);
        cmd_set_cel(91, 0);
        cmd_position(91, 42, 84);
        cmd_end_of_loop(91, 58);
      case 590:
        if (!(cmd_isset(58))) {
          jumpTo(592);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_greatern(30, 46))) {
          jumpTo(593);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
      case 593:
        cmd_reset(58);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 13);
        cmd_set_cel(91, 0);
        cmd_position(91, 42, 84);
        cmd_end_of_loop(91, 59);
      case 592:
        if (!(cmd_isset(59))) {
          jumpTo(594);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_greatern(30, 46))) {
          jumpTo(595);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
      case 595:
        cmd_reset(59);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 14);
        cmd_set_cel(91, 0);
        cmd_position(91, 42, 84);
        cmd_end_of_loop(91, 66);
        cmd_assignn(106, 255);
      case 594:
        jumpTo(32);
        break logicSwitch;
      case 583:
        if (cmd_isset(47)) {
          cmd_reset(47);
          cmd_program_control();
          cmd_prevent_input();
          if (cmd_greatern(30, 46)) {
            cmd_assignn(6, 0);
            cmd_set_loop(0, 1);
            cmd_set_cel(0, 3);
          }
          cmd_reset(121);
          cmd_load_view(202);
          cmd_animate_obj(202);
          cmd_set_view(202, 202);
          cmd_set_loop(202, 0);
          cmd_set_cel(202, 0);
          cmd_position(202, 5, 67);
          cmd_set_priority(202, 15);
          cmd_ignore_objs(202);
          cmd_assignn(91, 2);
          cmd_cycle_time(202, 91);
          cmd_draw(202);
          cmd_end_of_loop(202, 48);
        }
case 2855:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(48)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(48);
          cmd_program_control();
          cmd_prevent_input();
          if (cmd_greatern(30, 46)) {
            cmd_assignn(6, 0);
            cmd_set_loop(0, 1);
            cmd_set_cel(0, 3);
          }
          cmd_print(67);
jumptoLineArray = [2855, 28000];
ifSkipArray = [true];
jumpTo(2855, 7);
break logic;
case 28000:
          cmd_set_view(21, 22);
          cmd_set_loop(21, 3);
          cmd_set_cel(21, 0);
          cmd_position(21, 12, 126);
          cmd_assignn(91, 2);
          cmd_cycle_time(21, 91);
          cmd_draw(21);
          cmd_erase(202);
          cmd_end_of_loop(21, 49);
}
        }
case 2856:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(49)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(49);
          cmd_program_control();
          cmd_prevent_input();
          if (cmd_greatern(30, 46)) {
            cmd_assignn(6, 0);
            cmd_set_loop(0, 1);
            cmd_set_cel(0, 3);
          }
          cmd_print(68);
jumptoLineArray = [2856, 28000];
ifSkipArray = [true];
jumpTo(2856, 7);
break logic;
case 28000:
          cmd_reset(121);
          cmd_load_view(204);
          cmd_animate_obj(204);
          cmd_set_view(204, 204);
          cmd_set_loop(204, 2);
          cmd_set_cel(204, 0);
          cmd_position(204, 5, 67);
          cmd_set_priority(204, 15);
          cmd_ignore_objs(204);
          cmd_assignn(91, 4);
          cmd_cycle_time(204, 91);
          cmd_draw(204);
          cmd_assignn(77, 3);
          cmd_end_of_loop(204, 121);
          cmd_assignn(104, 0);
}
        }
      case 32:
        if (!(cmd_isset(60))) {
          jumpTo(596);
          break logicSwitch;
        }
        if (!(cmd_equaln(104, 0))) {
          jumpTo(597);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_set_loop(91, 15);
        cmd_set_cel(91, 0);
        cmd_end_of_loop(91, 61);
      case 597:
        if (!(cmd_equaln(104, 1) && cmd_isset(61))) {
          jumpTo(598);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_reset(61);
        cmd_load_view(94);
        cmd_set_view(91, 94);
        cmd_set_loop(91, 0);
        cmd_set_cel(91, 0);
        cmd_end_of_loop(91, 61);
      case 598:
        if (!(cmd_equaln(104, 2) && cmd_isset(61))) {
          jumpTo(599);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_set_loop(91, 1);
        cmd_set_cel(91, 0);
        cmd_start_cycling(91);
      case 599:
        if (!(cmd_equaln(104, 3))) {
          jumpTo(600);
          break logicSwitch;
        }
        cmd_increment(104);
        if (!(cmd_lessn(30, 108) && cmd_greatern(31, 120))) {
          jumpTo(601);
          break logicSwitch;
        }
        cmd_move_obj(0, 132, 124, 1, 62);
        jumpTo(33);
        break logicSwitch;
      case 601:
        if (!(cmd_lessn(30, 108) && !cmd_lessn(31, 118))) {
          jumpTo(602);
          break logicSwitch;
        }
        cmd_assignn(82, 124);
        cmd_assignv(83, 31);
        cmd_assignn(92, 1);
        cmd_move_obj_v(0, 82, 83, 92, 62);
        jumpTo(33);
        break logicSwitch;
      case 602:
        cmd_set(62);
        cmd_assignn(104, 4);
      case 600:
      case 33:
        if (!(cmd_isset(62) && cmd_equaln(104, 4))) {
          jumpTo(603);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_reset(62);
        cmd_move_obj(0, 90, 78, 1, 62);
        cmd_assignn(82, 0);
        cmd_assignn(83, 0);
        cmd_assignn(105, 0);
      case 603:
        if (!(!cmd_isset(62) && cmd_equaln(104, 5) && cmd_equalv(32, 82) && cmd_equalv(33, 83))) {
          jumpTo(604);
          break logicSwitch;
        }
        if (!(cmd_equaln(105, 0))) {
          jumpTo(605);
          break logicSwitch;
        }
        cmd_increment(105);
        cmd_load_view(17);
        cmd_animate_obj(1);
        cmd_set_view(1, 17);
        cmd_set_loop(1, 6);
        cmd_set_cel(1, 0);
        cmd_position_v(1, 30, 31);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(1, 84);
        cmd_ignore_objs(1);
        cmd_assignn(91, 1);
        cmd_cycle_time(1, 91);
        cmd_erase(0);
        cmd_draw(1);
        cmd_end_of_loop(1, 65);
      case 605:
        if (!(cmd_isset(65) && cmd_equaln(105, 1))) {
          jumpTo(606);
          break logicSwitch;
        }
        cmd_increment(105);
        cmd_reset(65);
        cmd_set_loop(1, 5);
        cmd_set_cel(1, 14);
        cmd_position(1, 110, 84);
        cmd_set_priority(1, 15);
        cmd_reverse_loop(1, 65);
      case 606:
        if (!(cmd_isset(65) && cmd_equaln(105, 2))) {
          jumpTo(607);
          break logicSwitch;
        }
        cmd_increment(105);
        cmd_reset(65);
        cmd_position(0, 110, 84);
        cmd_erase(1);
        cmd_draw(0);
      case 607:
      case 604:
        if (!(!cmd_isset(62) && cmd_equaln(104, 5))) {
          jumpTo(608);
          break logicSwitch;
        }
        cmd_assignv(82, 32);
        cmd_assignv(83, 33);
      case 608:
        if (!(cmd_isset(62) && cmd_equaln(104, 5))) {
          jumpTo(609);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_reset(62);
        cmd_load_view(17);
        cmd_animate_obj(1);
        cmd_set_view(1, 17);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_subn(30, 15);
        cmd_increment(31);
        cmd_position_v(1, 30, 31);
        cmd_set_priority(1, 13);
        cmd_ignore_objs(1);
        cmd_assignn(91, 1);
        cmd_cycle_time(1, 91);
        cmd_erase(0);
        cmd_draw(1);
        cmd_end_of_loop(1, 63);
        cmd_reset(147);
        cmd_load_sound(101);
        cmd_sound(101, 147);
        cmd_set(148);
      case 609:
        if (!(cmd_isset(64) && cmd_equaln(104, 6))) {
          jumpTo(610);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_reset(64);
        cmd_set_loop(91, 0);
        cmd_set_cel(91, 5);
        cmd_reverse_loop(91, 64);
      case 610:
        if (!(cmd_isset(64) && cmd_equaln(104, 7))) {
          jumpTo(611);
          break logicSwitch;
        }
        cmd_increment(104);
        cmd_reset(64);
        cmd_reset(60);
        cmd_set_view(91, 91);
        cmd_set_loop(91, 15);
        cmd_set_cel(91, 6);
        cmd_reverse_loop(91, 64);
        cmd_assignn(119, 0);
        cmd_assignn(120, 0);
        cmd_set(69);
        cmd_add_to_picReset();
        cmd_assignn(125, 0);
      case 611:
      case 596:
        if (cmd_isset(63)) {
          cmd_reset(63);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 64);
        }
        if (!(cmd_isset(69))) {
          jumpTo(612);
          break logicSwitch;
        }
        if (!(cmd_lessn(125, 50))) {
          jumpTo(613);
          break logicSwitch;
        }
        cmd_increment(125);
        jumpTo(34);
        break logicSwitch;
      case 613:
        if (!(!cmd_lessn(119, 0) && !cmd_greatern(119, 254) && !cmd_lessn(120, 0) && !cmd_greatern(120, 73))) {
          jumpTo(614);
          break logicSwitch;
        }
        cmd_assignn(121, 0);
        cmd_assignn(123, 10);
        cmd_call(87, [2601]);
        if (AGI.break_all_logics) return;
case 2601:
        cmd_increment(121);
        cmd_assignn(123, 150);
        cmd_call(87, [2602]);
        if (AGI.break_all_logics) return;
case 2602:
        cmd_increment(121);
        cmd_assignn(123, 80);
        cmd_call(87, [2603]);
        if (AGI.break_all_logics) return;
case 2603:
        cmd_increment(121);
        cmd_assignn(123, 140);
        cmd_call(87, [2604]);
        if (AGI.break_all_logics) return;
case 2604:
        cmd_increment(121);
        cmd_assignn(123, 28);
        cmd_call(87, [2605]);
        if (AGI.break_all_logics) return;
case 2605:
        cmd_increment(121);
        cmd_assignn(123, 111);
        cmd_call(87, [2606]);
        if (AGI.break_all_logics) return;
case 2606:
        cmd_increment(121);
        cmd_assignn(123, 20);
        cmd_call(87, [2607]);
        if (AGI.break_all_logics) return;
case 2607:
        cmd_increment(121);
        cmd_assignn(123, 130);
        cmd_call(87, [2608]);
        if (AGI.break_all_logics) return;
case 2608:
        cmd_increment(121);
        cmd_assignn(123, 30);
        cmd_call(87, [2609]);
        if (AGI.break_all_logics) return;
case 2609:
        cmd_increment(121);
        cmd_assignn(123, 27);
        cmd_call(87, [2610]);
        if (AGI.break_all_logics) return;
case 2610:
        cmd_increment(121);
        cmd_assignn(123, 86);
        cmd_call(87, [2611]);
        if (AGI.break_all_logics) return;
case 2611:
        cmd_increment(121);
        cmd_assignn(123, 87);
        cmd_call(87, [2612]);
        if (AGI.break_all_logics) return;
case 2612:
        cmd_increment(121);
        cmd_assignn(123, 15);
        cmd_call(87, [2613]);
        if (AGI.break_all_logics) return;
case 2613:
        cmd_increment(121);
        cmd_assignn(123, 0);
        cmd_call(87, [2614]);
        if (AGI.break_all_logics) return;
case 2614:
        cmd_increment(121);
        cmd_assignn(123, 159);
        cmd_call(87, [2615]);
        if (AGI.break_all_logics) return;
case 2615:
        cmd_increment(121);
        cmd_assignn(123, 131);
        cmd_call(87, [2616]);
        if (AGI.break_all_logics) return;
case 2616:
        cmd_increment(121);
        cmd_assignn(123, 120);
        cmd_call(87, [2617]);
        if (AGI.break_all_logics) return;
case 2617:
        cmd_increment(121);
        cmd_assignn(123, 26);
        cmd_call(87, [2618]);
        if (AGI.break_all_logics) return;
case 2618:
        cmd_increment(121);
        cmd_assignn(123, 83);
        cmd_call(87, [2619]);
        if (AGI.break_all_logics) return;
case 2619:
        cmd_increment(121);
        cmd_assignn(123, 54);
        cmd_call(87, [2620]);
        if (AGI.break_all_logics) return;
case 2620:
        cmd_increment(121);
        cmd_assignn(123, 40);
        cmd_call(87, [2621]);
        if (AGI.break_all_logics) return;
case 2621:
        cmd_increment(121);
        cmd_assignn(123, 1);
        cmd_call(87, [2622]);
        if (AGI.break_all_logics) return;
case 2622:
        cmd_increment(121);
        cmd_assignn(123, 158);
        cmd_call(87, [2623]);
        if (AGI.break_all_logics) return;
case 2623:
        cmd_increment(121);
        cmd_assignn(123, 9);
        cmd_call(87, [2624]);
        if (AGI.break_all_logics) return;
case 2624:
        cmd_increment(121);
        cmd_assignn(123, 17);
        cmd_call(87, [2625]);
        if (AGI.break_all_logics) return;
case 2625:
        cmd_increment(121);
        cmd_assignn(123, 33);
        cmd_call(87, [2626]);
        if (AGI.break_all_logics) return;
case 2626:
        cmd_increment(121);
        cmd_assignn(123, 64);
        cmd_call(87, [2627]);
        if (AGI.break_all_logics) return;
case 2627:
        cmd_increment(121);
        cmd_assignn(123, 37);
        cmd_call(87, [2628]);
        if (AGI.break_all_logics) return;
case 2628:
        cmd_increment(121);
        cmd_assignn(123, 102);
        cmd_call(87, [2629]);
        if (AGI.break_all_logics) return;
case 2629:
        cmd_increment(121);
        cmd_assignn(123, 18);
        cmd_call(87, [2630]);
        if (AGI.break_all_logics) return;
case 2630:
        cmd_increment(121);
        cmd_assignn(123, 2);
        cmd_call(87, [2631]);
        if (AGI.break_all_logics) return;
case 2631:
        cmd_increment(121);
        cmd_assignn(123, 157);
        cmd_call(87, [2632]);
        if (AGI.break_all_logics) return;
case 2632:
        cmd_increment(121);
        cmd_assignn(123, 67);
        cmd_call(87, [2633]);
        if (AGI.break_all_logics) return;
case 2633:
        cmd_increment(121);
        cmd_assignn(123, 143);
        cmd_call(87, [2634]);
        if (AGI.break_all_logics) return;
case 2634:
        cmd_increment(121);
        cmd_assignn(123, 105);
        cmd_call(87, [2635]);
        if (AGI.break_all_logics) return;
case 2635:
        cmd_increment(121);
        cmd_assignn(123, 23);
        cmd_call(87, [2636]);
        if (AGI.break_all_logics) return;
case 2636:
        cmd_increment(121);
        cmd_assignn(123, 69);
        cmd_call(87, [2637]);
        if (AGI.break_all_logics) return;
case 2637:
        cmd_increment(121);
        cmd_assignn(123, 110);
        cmd_call(87, [2638]);
        if (AGI.break_all_logics) return;
case 2638:
        cmd_increment(121);
        cmd_assignn(123, 50);
        cmd_call(87, [2639]);
        if (AGI.break_all_logics) return;
case 2639:
        cmd_increment(121);
        cmd_assignn(123, 128);
        cmd_call(87, [2640]);
        if (AGI.break_all_logics) return;
case 2640:
        cmd_increment(121);
        cmd_assignn(123, 108);
        cmd_call(87, [2641]);
        if (AGI.break_all_logics) return;
case 2641:
        cmd_increment(121);
        cmd_assignn(123, 3);
        cmd_call(87, [2642]);
        if (AGI.break_all_logics) return;
case 2642:
        cmd_increment(121);
        cmd_assignn(123, 156);
        cmd_call(87, [2643]);
        if (AGI.break_all_logics) return;
case 2643:
        cmd_increment(121);
        cmd_assignn(123, 55);
        cmd_call(87, [2644]);
        if (AGI.break_all_logics) return;
case 2644:
        cmd_increment(121);
        cmd_assignn(123, 100);
        cmd_call(87, [2645]);
        if (AGI.break_all_logics) return;
case 2645:
        cmd_increment(121);
        cmd_assignn(123, 16);
        cmd_call(87, [2646]);
        if (AGI.break_all_logics) return;
case 2646:
        cmd_increment(121);
        cmd_assignn(123, 4);
        cmd_call(87, [2647]);
        if (AGI.break_all_logics) return;
case 2647:
        cmd_increment(121);
        cmd_assignn(123, 155);
        cmd_call(87, [2648]);
        if (AGI.break_all_logics) return;
case 2648:
        cmd_increment(121);
        cmd_assignn(123, 48);
        cmd_call(87, [2649]);
        if (AGI.break_all_logics) return;
case 2649:
        cmd_increment(121);
        cmd_assignn(123, 99);
        cmd_call(87, [2650]);
        if (AGI.break_all_logics) return;
case 2650:
        cmd_increment(121);
        cmd_assignn(123, 19);
        cmd_call(87, [2651]);
        if (AGI.break_all_logics) return;
case 2651:
        cmd_increment(121);
        cmd_assignn(123, 11);
        cmd_call(87, [2652]);
        if (AGI.break_all_logics) return;
case 2652:
        cmd_increment(121);
        cmd_assignn(123, 32);
        cmd_call(87, [2653]);
        if (AGI.break_all_logics) return;
case 2653:
        cmd_increment(121);
        cmd_assignn(123, 66);
        cmd_call(87, [2654]);
        if (AGI.break_all_logics) return;
case 2654:
        cmd_increment(121);
        cmd_assignn(123, 141);
        cmd_call(87, [2655]);
        if (AGI.break_all_logics) return;
case 2655:
        cmd_increment(121);
        cmd_assignn(123, 117);
        cmd_call(87, [2656]);
        if (AGI.break_all_logics) return;
case 2656:
        cmd_increment(121);
        cmd_assignn(123, 5);
        cmd_call(87, [2657]);
        if (AGI.break_all_logics) return;
case 2657:
        cmd_increment(121);
        cmd_assignn(123, 154);
        cmd_call(87, [2658]);
        if (AGI.break_all_logics) return;
case 2658:
        cmd_increment(121);
        cmd_assignn(123, 94);
        cmd_call(87, [2659]);
        if (AGI.break_all_logics) return;
case 2659:
        cmd_increment(121);
        cmd_assignn(123, 24);
        cmd_call(87, [2660]);
        if (AGI.break_all_logics) return;
case 2660:
        cmd_increment(121);
        cmd_assignn(123, 95);
        cmd_call(87, [2661]);
        if (AGI.break_all_logics) return;
case 2661:
        cmd_increment(121);
        cmd_assignn(123, 96);
        cmd_call(87, [2662]);
        if (AGI.break_all_logics) return;
case 2662:
        cmd_increment(121);
        cmd_assignn(123, 84);
        cmd_call(87, [2663]);
        if (AGI.break_all_logics) return;
case 2663:
        cmd_increment(121);
        cmd_assignn(123, 22);
        cmd_call(87, [2664]);
        if (AGI.break_all_logics) return;
case 2664:
        cmd_increment(121);
        cmd_assignn(123, 21);
        cmd_call(87, [2665]);
        if (AGI.break_all_logics) return;
case 2665:
        cmd_increment(121);
        cmd_assignn(123, 53);
        cmd_call(87, [2666]);
        if (AGI.break_all_logics) return;
case 2666:
        cmd_increment(121);
        cmd_assignn(123, 126);
        cmd_call(87, [2667]);
        if (AGI.break_all_logics) return;
case 2667:
        cmd_increment(121);
        cmd_assignn(123, 6);
        cmd_call(87, [2668]);
        if (AGI.break_all_logics) return;
case 2668:
        cmd_increment(121);
        cmd_assignn(123, 153);
        cmd_call(87, [2669]);
        if (AGI.break_all_logics) return;
case 2669:
        cmd_increment(121);
        cmd_assignn(123, 145);
        cmd_call(87, [2670]);
        if (AGI.break_all_logics) return;
case 2670:
        cmd_increment(121);
        cmd_assignn(123, 146);
        cmd_call(87, [2671]);
        if (AGI.break_all_logics) return;
case 2671:
        cmd_increment(121);
        cmd_assignn(123, 62);
        cmd_call(87, [2672]);
        if (AGI.break_all_logics) return;
case 2672:
        cmd_increment(121);
        cmd_assignn(123, 76);
        cmd_call(87, [2673]);
        if (AGI.break_all_logics) return;
case 2673:
        cmd_increment(121);
        cmd_assignn(123, 137);
        cmd_call(87, [2674]);
        if (AGI.break_all_logics) return;
case 2674:
        cmd_increment(121);
        cmd_assignn(123, 93);
        cmd_call(87, [2675]);
        if (AGI.break_all_logics) return;
case 2675:
        cmd_increment(121);
        cmd_assignn(123, 85);
        cmd_call(87, [2676]);
        if (AGI.break_all_logics) return;
case 2676:
        cmd_increment(121);
        cmd_assignn(123, 12);
        cmd_call(87, [2677]);
        if (AGI.break_all_logics) return;
case 2677:
        cmd_increment(121);
        cmd_assignn(123, 34);
        cmd_call(87, [2678]);
        if (AGI.break_all_logics) return;
case 2678:
        cmd_increment(121);
        cmd_assignn(123, 7);
        cmd_call(87, [2679]);
        if (AGI.break_all_logics) return;
case 2679:
        cmd_increment(121);
        cmd_assignn(123, 152);
        cmd_call(87, [2680]);
        if (AGI.break_all_logics) return;
case 2680:
        cmd_increment(121);
        cmd_assignn(123, 35);
        cmd_call(87, [2681]);
        if (AGI.break_all_logics) return;
case 2681:
        cmd_increment(121);
        cmd_assignn(123, 139);
        cmd_call(87, [2682]);
        if (AGI.break_all_logics) return;
case 2682:
        cmd_increment(121);
        cmd_assignn(123, 142);
        cmd_call(87, [2683]);
        if (AGI.break_all_logics) return;
case 2683:
        cmd_increment(121);
        cmd_assignn(123, 147);
        cmd_call(87, [2684]);
        if (AGI.break_all_logics) return;
case 2684:
        cmd_increment(121);
        cmd_assignn(123, 119);
        cmd_call(87, [2685]);
        if (AGI.break_all_logics) return;
case 2685:
        cmd_increment(121);
        cmd_assignn(123, 107);
        cmd_call(87, [2686]);
        if (AGI.break_all_logics) return;
case 2686:
        cmd_increment(121);
        cmd_assignn(123, 78);
        cmd_call(87, [2687]);
        if (AGI.break_all_logics) return;
case 2687:
        cmd_increment(121);
        cmd_assignn(123, 136);
        cmd_call(87, [2688]);
        if (AGI.break_all_logics) return;
case 2688:
        cmd_increment(121);
        cmd_assignn(123, 133);
        cmd_call(87, [2689]);
        if (AGI.break_all_logics) return;
case 2689:
        cmd_increment(121);
        cmd_assignn(123, 89);
        cmd_call(87, [2690]);
        if (AGI.break_all_logics) return;
case 2690:
        cmd_increment(121);
        cmd_assignn(123, 45);
        cmd_call(87, [2691]);
        if (AGI.break_all_logics) return;
case 2691:
        cmd_increment(121);
        cmd_assignn(123, 127);
        cmd_call(87, [2692]);
        if (AGI.break_all_logics) return;
case 2692:
        cmd_increment(121);
        cmd_assignn(123, 8);
        cmd_call(87, [2693]);
        if (AGI.break_all_logics) return;
case 2693:
        cmd_increment(121);
        cmd_assignn(123, 151);
        cmd_call(87, [2694]);
        if (AGI.break_all_logics) return;
case 2694:
        cmd_increment(121);
        cmd_assignn(123, 138);
        cmd_call(87, [2695]);
        if (AGI.break_all_logics) return;
case 2695:
        cmd_increment(121);
        cmd_assignn(123, 122);
        cmd_call(87, [2696]);
        if (AGI.break_all_logics) return;
case 2696:
        cmd_increment(121);
        cmd_assignn(123, 104);
        cmd_call(87, [2697]);
        if (AGI.break_all_logics) return;
case 2697:
        cmd_increment(121);
        cmd_assignn(123, 134);
        cmd_call(87, [2698]);
        if (AGI.break_all_logics) return;
case 2698:
        cmd_increment(121);
        cmd_assignn(123, 57);
        cmd_call(87, [2699]);
        if (AGI.break_all_logics) return;
case 2699:
        cmd_increment(121);
        cmd_assignn(123, 38);
        cmd_call(87, [2700]);
        if (AGI.break_all_logics) return;
case 2700:
        cmd_increment(121);
        cmd_assignn(123, 79);
        cmd_call(87, [2701]);
        if (AGI.break_all_logics) return;
case 2701:
        cmd_increment(121);
        cmd_assignn(123, 29);
        cmd_call(87, [2702]);
        if (AGI.break_all_logics) return;
case 2702:
        cmd_increment(121);
        cmd_assignn(123, 129);
        cmd_call(87, [2703]);
        if (AGI.break_all_logics) return;
case 2703:
        cmd_increment(121);
        cmd_assignn(123, 82);
        cmd_call(87, [2704]);
        if (AGI.break_all_logics) return;
case 2704:
        cmd_increment(121);
        cmd_assignn(123, 14);
        cmd_call(87, [2705]);
        if (AGI.break_all_logics) return;
case 2705:
        cmd_increment(121);
        cmd_assignn(123, 148);
        cmd_call(87, [2706]);
        if (AGI.break_all_logics) return;
case 2706:
        cmd_increment(121);
        cmd_assignn(123, 42);
        cmd_call(87, [2707]);
        if (AGI.break_all_logics) return;
case 2707:
        cmd_increment(121);
        cmd_assignn(123, 43);
        cmd_call(87, [2708]);
        if (AGI.break_all_logics) return;
case 2708:
        cmd_increment(121);
        cmd_assignn(123, 149);
        cmd_call(87, [2709]);
        if (AGI.break_all_logics) return;
case 2709:
        cmd_increment(121);
        cmd_assignn(123, 91);
        cmd_call(87, [2710]);
        if (AGI.break_all_logics) return;
case 2710:
        cmd_increment(121);
        cmd_assignn(123, 49);
        cmd_call(87, [2711]);
        if (AGI.break_all_logics) return;
case 2711:
        cmd_increment(121);
        cmd_assignn(123, 46);
        cmd_call(87, [2712]);
        if (AGI.break_all_logics) return;
case 2712:
        cmd_increment(121);
        cmd_assignn(123, 47);
        cmd_call(87, [2713]);
        if (AGI.break_all_logics) return;
case 2713:
        cmd_increment(121);
        cmd_assignn(123, 60);
        cmd_call(87, [2714]);
        if (AGI.break_all_logics) return;
case 2714:
        cmd_increment(121);
        cmd_assignn(123, 135);
        cmd_call(87, [2715]);
        if (AGI.break_all_logics) return;
case 2715:
        cmd_increment(121);
        cmd_assignn(123, 101);
        cmd_call(87, [2716]);
        if (AGI.break_all_logics) return;
case 2716:
        cmd_increment(121);
        cmd_assignn(123, 77);
        cmd_call(87, [2717]);
        if (AGI.break_all_logics) return;
case 2717:
        cmd_increment(121);
        cmd_assignn(123, 113);
        cmd_call(87, [2718]);
        if (AGI.break_all_logics) return;
case 2718:
        cmd_increment(121);
        cmd_assignn(123, 75);
        cmd_call(87, [2719]);
        if (AGI.break_all_logics) return;
case 2719:
        cmd_increment(121);
        cmd_assignn(123, 51);
        cmd_call(87, [2720]);
        if (AGI.break_all_logics) return;
case 2720:
        cmd_increment(121);
        cmd_assignn(123, 90);
        cmd_call(87, [2721]);
        if (AGI.break_all_logics) return;
case 2721:
        cmd_increment(121);
        cmd_assignn(123, 58);
        cmd_call(87, [2722]);
        if (AGI.break_all_logics) return;
case 2722:
        cmd_increment(121);
        cmd_assignn(123, 25);
        cmd_call(87, [2723]);
        if (AGI.break_all_logics) return;
case 2723:
        cmd_increment(121);
        cmd_assignn(123, 144);
        cmd_call(87, [2724]);
        if (AGI.break_all_logics) return;
case 2724:
        cmd_increment(121);
        cmd_assignn(123, 106);
        cmd_call(87, [2725]);
        if (AGI.break_all_logics) return;
case 2725:
        cmd_increment(121);
        cmd_assignn(123, 123);
        cmd_call(87, [2726]);
        if (AGI.break_all_logics) return;
case 2726:
        cmd_increment(121);
        cmd_assignn(123, 103);
        cmd_call(87, [2727]);
        if (AGI.break_all_logics) return;
case 2727:
        cmd_increment(121);
        cmd_assignn(123, 71);
        cmd_call(87, [2728]);
        if (AGI.break_all_logics) return;
case 2728:
        cmd_increment(121);
        cmd_assignn(123, 13);
        cmd_call(87, [2729]);
        if (AGI.break_all_logics) return;
case 2729:
        cmd_increment(121);
        cmd_assignn(123, 118);
        cmd_call(87, [2730]);
        if (AGI.break_all_logics) return;
case 2730:
        cmd_increment(121);
        cmd_assignn(123, 56);
        cmd_call(87, [2731]);
        if (AGI.break_all_logics) return;
case 2731:
        cmd_increment(121);
        cmd_assignn(123, 44);
        cmd_call(87, [2732]);
        if (AGI.break_all_logics) return;
case 2732:
        cmd_increment(121);
        cmd_assignn(123, 61);
        cmd_call(87, [2733]);
        if (AGI.break_all_logics) return;
case 2733:
        cmd_increment(121);
        cmd_assignn(123, 41);
        cmd_call(87, [2734]);
        if (AGI.break_all_logics) return;
case 2734:
        cmd_increment(121);
        cmd_assignn(123, 124);
        cmd_call(87, [2735]);
        if (AGI.break_all_logics) return;
case 2735:
        cmd_increment(121);
        cmd_assignn(123, 68);
        cmd_call(87, [2736]);
        if (AGI.break_all_logics) return;
case 2736:
        cmd_increment(121);
        cmd_assignn(123, 31);
        cmd_call(87, [2737]);
        if (AGI.break_all_logics) return;
case 2737:
        cmd_increment(121);
        cmd_assignn(123, 63);
        cmd_call(87, [2738]);
        if (AGI.break_all_logics) return;
case 2738:
        cmd_increment(121);
        cmd_assignn(123, 59);
        cmd_call(87, [2739]);
        if (AGI.break_all_logics) return;
case 2739:
        cmd_increment(121);
        cmd_assignn(123, 88);
        cmd_call(87, [2740]);
        if (AGI.break_all_logics) return;
case 2740:
        cmd_increment(121);
        cmd_assignn(123, 74);
        cmd_call(87, [2741]);
        if (AGI.break_all_logics) return;
case 2741:
        cmd_increment(121);
        cmd_assignn(123, 112);
        cmd_call(87, [2742]);
        if (AGI.break_all_logics) return;
case 2742:
        cmd_increment(121);
        cmd_assignn(123, 72);
        cmd_call(87, [2743]);
        if (AGI.break_all_logics) return;
case 2743:
        cmd_increment(121);
        cmd_assignn(123, 73);
        cmd_call(87, [2744]);
        if (AGI.break_all_logics) return;
case 2744:
        cmd_increment(121);
        cmd_assignn(123, 114);
        cmd_call(87, [2745]);
        if (AGI.break_all_logics) return;
case 2745:
        cmd_increment(121);
        cmd_assignn(123, 132);
        cmd_call(87, [2746]);
        if (AGI.break_all_logics) return;
case 2746:
        cmd_increment(121);
        cmd_assignn(123, 115);
        cmd_call(87, [2747]);
        if (AGI.break_all_logics) return;
case 2747:
        cmd_increment(121);
        cmd_assignn(123, 65);
        cmd_call(87, [2748]);
        if (AGI.break_all_logics) return;
case 2748:
        cmd_increment(121);
        cmd_assignn(123, 36);
        cmd_call(87, [2749]);
        if (AGI.break_all_logics) return;
case 2749:
        cmd_increment(121);
        cmd_assignn(123, 52);
        cmd_call(87, [2750]);
        if (AGI.break_all_logics) return;
case 2750:
        cmd_increment(121);
        cmd_assignn(123, 109);
        cmd_call(87, [2751]);
        if (AGI.break_all_logics) return;
case 2751:
        cmd_increment(121);
        cmd_assignn(123, 92);
        cmd_call(87, [2752]);
        if (AGI.break_all_logics) return;
case 2752:
        cmd_increment(121);
        cmd_assignn(123, 39);
        cmd_call(87, [2753]);
        if (AGI.break_all_logics) return;
case 2753:
        cmd_increment(121);
        cmd_assignn(123, 121);
        cmd_call(87, [2754]);
        if (AGI.break_all_logics) return;
case 2754:
        cmd_increment(121);
        cmd_assignn(123, 81);
        cmd_call(87, [2755]);
        if (AGI.break_all_logics) return;
case 2755:
        cmd_increment(121);
        cmd_assignn(123, 70);
        cmd_call(87, [2756]);
        if (AGI.break_all_logics) return;
case 2756:
        cmd_increment(121);
        cmd_assignn(123, 97);
        cmd_call(87, [2757]);
        if (AGI.break_all_logics) return;
case 2757:
        cmd_increment(121);
        cmd_assignn(123, 125);
        cmd_call(87, [2758]);
        if (AGI.break_all_logics) return;
case 2758:
        cmd_increment(121);
        cmd_assignn(123, 98);
        cmd_call(87, [2759]);
        if (AGI.break_all_logics) return;
case 2759:
        cmd_increment(121);
        cmd_assignn(123, 116);
        cmd_call(87, [2760]);
        if (AGI.break_all_logics) return;
case 2760:
        cmd_increment(121);
        if (!(cmd_lessn(119, 254))) {
          jumpTo(615);
          break logicSwitch;
        }
        cmd_increment(119);
        jumpTo(35);
        break logicSwitch;
      case 615:
        cmd_increment(120);
      case 614:
      case 35:
        if (!(cmd_equaln(120, 74))) {
          jumpTo(616);
          break logicSwitch;
        }
        cmd_increment(120);
        cmd_animate_obj(19);
        cmd_set_view(19, 19);
        cmd_set_loop(19, 2);
        cmd_set_cel(19, 0);
        cmd_set_priority(19, 15);
        cmd_position(19, 64, 84);
        cmd_stop_cycling(19);
        cmd_draw(19);
        cmd_assignn(91, 1);
        cmd_cycle_time(19, 91);
        cmd_end_of_loop(19, 95);
        cmd_reset(69);
        cmd_assignn(125, 0);
        cmd_load_sound(102);
        cmd_sound(102, 147);
        cmd_set(148);
      case 616:
      case 612:
      case 34:
case 2857:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(95)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          if (cmd_lessn(125, 100)) {
            cmd_increment(125);
          }
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(125, 100)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_increment(125);
            cmd_print(69);
jumptoLineArray = [2857, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2857, 7);
break logic;
case 280000:
}
          }
          if ((cmd_equaln(125, 101) && (cmd_have_key() || cmd_controller(c30)))) {
            cmd_print(70);
jumptoLineArray = [2858];
jumpTo(2858, 7);
break logic;
          }
}
        }
case 2858:
        if (!(cmd_isset(66))) {
          jumpTo(617);
          break logicSwitch;
        }
        if (!(cmd_equaln(106, 255))) {
          jumpTo(618);
          break logicSwitch;
        }
        cmd_program_control();
        cmd_prevent_input();
        if (!(cmd_lessn(30, 114) && cmd_greatern(31, 120))) {
          jumpTo(619);
          break logicSwitch;
        }
        if (!(!cmd_equaln(6, 3))) {
          jumpTo(620);
          break logicSwitch;
        }
        cmd_assignn(6, 3);
      case 620:
        jumpTo(36);
        break logicSwitch;
      case 619:
        if (!(!cmd_lessn(30, 114) && cmd_greatern(31, 120) && cmd_equaln(6, 3))) {
          jumpTo(621);
          break logicSwitch;
        }
        cmd_assignn(6, 0);
        jumpTo(36);
        break logicSwitch;
      case 621:
        cmd_set_loop(0, 1);
        cmd_set_cel(0, 3);
        cmd_assignn(106, 0);
      case 618:
      case 36:
        if (!(cmd_equaln(106, 0))) {
          jumpTo(622);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 0);
        cmd_set_cel(90, 0);
        cmd_assignn(91, 4);
        cmd_cycle_time(90, 91);
        cmd_end_of_loop(90, 66);
      case 622:
        if (!(cmd_isset(66) && cmd_equaln(106, 1))) {
          jumpTo(623);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 1);
        cmd_set_cel(90, 0);
        cmd_position(90, 78, 125);
        cmd_assignn(91, 1);
        cmd_cycle_time(90, 91);
        cmd_end_of_loop(90, 66);
      case 623:
        if (!(cmd_isset(66) && cmd_equaln(106, 2))) {
          jumpTo(624);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 4);
        cmd_set_cel(90, 0);
        cmd_position(90, 82, 123);
        cmd_release_priority(90);
        cmd_observe_objs(90);
        cmd_set(66);
        jumpTo(37);
        break logicSwitch;
      case 624:
        if (!(cmd_isset(66) && cmd_equaln(106, 3))) {
          jumpTo(625);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 4);
        cmd_set_cel(90, 1);
        cmd_set(66);
        jumpTo(37);
        break logicSwitch;
      case 625:
        if (!(cmd_isset(66) && cmd_equaln(106, 4))) {
          jumpTo(626);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 5);
        cmd_set_cel(90, 0);
        cmd_normal_cycle(90);
        cmd_move_obj(90, 30, 123, 1, 66);
      case 626:
      case 37:
        if (!(cmd_isset(66) && cmd_equaln(106, 5))) {
          jumpTo(627);
          break logicSwitch;
        }
        cmd_increment(106);
        cmd_reset(66);
        cmd_set_loop(90, 4);
        cmd_set_cel(90, 1);
        cmd_stop_cycling(90);
        cmd_set_loop(21, 6);
        cmd_set_cel(21, 0);
        cmd_position(21, 13, 123);
        cmd_end_of_loop(21, 100);
        cmd_animate_obj(81);
        cmd_load_view(153);
        cmd_animate_obj(81);
        cmd_set_view(81, 153);
        cmd_set_loop(81, 6);
        cmd_set_cel(81, 0);
        cmd_position(81, 29, 93);
        cmd_get_priority(90, 84);
        cmd_set_priority_v(81, 84);
        cmd_ignore_blocks(81);
        cmd_ignore_objs(81);
        cmd_start_cycling(81);
        cmd_draw(81);
        cmd_animate_obj(83);
        cmd_load_view(153);
        cmd_animate_obj(83);
        cmd_set_view(83, 153);
        cmd_set_loop(83, 6);
        cmd_set_cel(83, 0);
        cmd_position(83, 15, 91);
        cmd_get_priority(21, 84);
        cmd_set_priority_v(83, 84);
        cmd_ignore_blocks(83);
        cmd_ignore_objs(83);
        cmd_start_cycling(83);
        cmd_draw(83);
        cmd_set(67);
        cmd_assignn(107, 0);
      case 627:
      case 617:
        if (!(cmd_isset(67))) {
          jumpTo(628);
          break logicSwitch;
        }
        if (!(cmd_equaln(107, 0))) {
          jumpTo(629);
          break logicSwitch;
        }
        cmd_current_cel(81, 87);
        if (!(cmd_equaln(87, 15))) {
          jumpTo(630);
          break logicSwitch;
        }
        cmd_animate_obj(82);
        cmd_load_view(153);
        cmd_animate_obj(82);
        cmd_set_view(82, 153);
        cmd_set_loop(82, 6);
        cmd_set_cel(82, 0);
        cmd_position(82, 29, 93);
        cmd_get_priority(90, 84);
        cmd_set_priority_v(82, 84);
        cmd_ignore_blocks(82);
        cmd_ignore_objs(82);
        cmd_start_cycling(82);
        cmd_draw(82);
        cmd_animate_obj(84);
        cmd_load_view(153);
        cmd_animate_obj(84);
        cmd_set_view(84, 153);
        cmd_set_loop(84, 6);
        cmd_set_cel(84, 0);
        cmd_position(84, 15, 91);
        cmd_get_priority(21, 84);
        cmd_set_priority_v(84, 84);
        cmd_ignore_blocks(84);
        cmd_ignore_objs(84);
        cmd_start_cycling(84);
        cmd_draw(84);
        cmd_increment(107);
      case 630:
        jumpTo(38);
        break logicSwitch;
      case 629:
        if (!(cmd_lessn(107, 20))) {
          jumpTo(631);
          break logicSwitch;
        }
        cmd_increment(107);
        jumpTo(38);
        break logicSwitch;
      case 631:
        cmd_load_view(17);
        cmd_set_view(1, 17);
        cmd_set_loop(1, 7);
        cmd_set_cel(1, 0);
        cmd_position_v(1, 30, 31);
        cmd_get_priority(0, 84);
        cmd_set_priority_v(1, 84);
        cmd_assignn(91, 2);
        cmd_cycle_time(1, 91);
        cmd_erase(0);
        cmd_draw(1);
        if (!(cmd_isset(140))) {
          jumpTo(632);
          break logicSwitch;
        }
        cmd_end_of_loop(1, 68);
        jumpTo(39);
        break logicSwitch;
      case 632:
        cmd_end_of_loop(1, 96);
      case 39:
        cmd_reset(67);
      case 628:
      case 38:
        if ((cmd_isset(96) || cmd_isset(97)) && cmd_lessn(126, 50)) {
          cmd_increment(126);
        }
        if (cmd_isset(97) && cmd_equaln(126, 50)) {
          cmd_new_room(16);
          if (AGI.break_all_logics) return;
        }
        if (cmd_isset(96) && cmd_equaln(126, 50)) {
          cmd_new_room(2);
          if (AGI.break_all_logics) return;
        }
case 2859:
ifSkip = ifSkipArrayShift();
        if ((cmd_equaln(2, 4)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(1, 14)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(71);
            cmd_print(72);
            cmd_print(73);
jumptoLineArray = [2859, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2859, 7);
break logic;
case 280000:
            cmd_assignn(6, 3);
            cmd_assignn(2, 0);
            jumpTo(40);
            break logicSwitch;
}
          }
          cmd_new_room(6);
          if (AGI.break_all_logics) return;
}
        }
      case 40:
case 2860:
ifSkip = ifSkipArrayShift();
        if ((cmd_equaln(2, 2)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(1, 14)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(71);
            cmd_print(72);
            cmd_print(73);
jumptoLineArray = [2860, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2860, 7);
break logic;
case 280000:
            cmd_assignn(6, 7);
            cmd_assignn(2, 0);
            jumpTo(41);
            break logicSwitch;
}
          }
          cmd_new_room(13);
          if (AGI.break_all_logics) return;
}
        }
      case 41:
        return;

    }
  }
}
MESSAGES[7] = [
  "",
  "You have reached a\nwall in your life.",
  "A snowman exists in this climate?",
  "A snowman's remains can be seen.",
  "There is a girl laying on the stone bier.",
  "A Water Elemental resides where there once was a snowman.",
  "Has this snowman always been here?",
  "It's a typical snowman, or \"snowperson\" might be a better way to say it. ",
  "A puddle that once was a snowman. So sad. You'd think the hat would have done the opposite.",
  "The snowman's eyes are made of coal. Typical.",
  "The snowman's nose is a carrot. Typical.",
  "The snowman's arms are sticks. Typical.",
  "The snowman is cold. That's why it needs a scarf.",
  "The snowman has melted. So sad. You'd think the hat would have done the opposite.",
  "Just like you, the wall has seen better days.",
  "Someone left a most excellent lawn chair.",
  "It's very nice. Looks quite comfortable. Once your mattress wears out you can use this!",
  "Leave the chair for the next person who desires to rest in the utmost of comfort.",
  "All your life you've been looking for her. Just your luck, she's sleeping. Hopefully, she isn't always like this.",
  "It's perfectly normal for water to freeze and for snow to melt.",
  "Reversible change!",
  "You can't reach the snowman from here. You should stand in front of the snowman.",
  "You like this hat. You are not ready to give it to someone who is giving you the cold shoulder.",
  "Besides, what else would you carry your rabbit in?",
  "You are a man without a hat.",
  "You place the hat on the snowman's head and...",
  "And...",
  "Hmm, and...",
  "Come on, and...",
  "Really? And...",
  "Seriously, this is it. And?",
  "Nothing.",
  "Wow, that was anticlimactic.",
  "The snowman looks better in the hat than you do.",
  "The hat is all wet. No need to carry around a soggy hat.",
  "And get frostbite.  No way!",
  "That's the snowman's nose! Don't take away his sense of smell.",
  "Don't take the snowman's eyes! It wouldn't be able to see where it's going.",
  "You are not cold, so no need for a scarf.",
  "Now that you have the Water Elemental, you will never be thirsty again!",
  "You are not thirsty, but thanks for asking!",
  "You don't see that...",
  "You need something to put it in.",
  "You can't reach the water from here. You should stand in front of the melted snowman.",
  "You're back!",
  "Time to regulate!",
  "Try as you might, you can not wake her beauty. She is in a deep stupor.",
  "You already kissed the girl. Don't be too persistent.",
  "Hey! What are you thinking? You don't know each other well enough for that kind of behavior.",
  "Would your mother be proud right now?",
  "Fine, don't listen to me.",
  "You gently ready your best kissing technique to wow the lips of this fair maiden.",
  "Here you go!",
  "MUAH!",
  "Try reaching her from the other side of the bier that she is resting on.",
  "Do you want to blow her a kiss? You should get closer.",
  "Wow, that was so good you felt the world move.",
  "Your back pocket seems empty. Did he really just steal your pick?",
  "Wait, you feel kinda funny...",
  "\"Welcome!\" the man with the crimson skin growls, \"You puny, insignificant humans always fall for that!\"",
  "\"Ha! Ha! Ha!\"",
  "\"Your pick is now mine!\"",
  "\"There is no one to save you now!\"",
  "This is non-",
  "non-non-",
  "non-non-non-",
  "heinous!",
  "Sooo thirsty...",
  "Your bodyguard was quite parched and has died of thirst...",
  "That was a \"horrible\" ending. There must be something better than that!",
  "Thank you for playing Fro Quest 1. Better luck next time!",
  "You can't leave her to suffer his torment!",
  "Do something!",
  "Regulate!"
];
CONTROLS[7] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4><4.Q<!>4<0.UA<r<+.F<.gF<Z<!A>+A<P<x5>.9F<9<r5>.UF.{<gA>+LlA.^<Z5>{5P5rF.r<PA>xAK5P5^A.g<K5>rF95K5KA{F.P<9A>r5P5KV.9A.E<45>!5KAKV.KFxQ.,5>+F<9FZ5U.+A><.UAK5Z.^5><.rFg.xA/P.r5/Z.gA/g.Z5/r.U5/x.KA/!.E5/+.95/{.45/,.45/,,5/.4{5/.9+5/.E+5/.E+5/.E+5/.E+5/.E45+5/.995^5/.995^5><.r5.gE5!5><.l595.ZE*><.4.5.4><.,5U5U5K5.4><.,5P5Z5K5.4><.,5K5l5E5.4><.,5E5x595.4><.,595^A.4><.,A{5.4><.,5+A.9><.,5!A.K><.,Ar5.U/9LKA.Z/UF.l?4?4?4?4?4.P=><.{.P5^5><.{.P5^5><.{.P5^5><.{.P5^5><.{.P5^5><.{.P5^5><.{.P=><.{?4?4?4?4?4?4?4?4?4>U<5<.x>P5<45<.x>P5<95<.r>U<5<.x?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4";
