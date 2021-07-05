window.logic4 = function() {
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
        cmd_animate_obj(35);
        cmd_load_view(35);
        cmd_set_view(35, 35);
        cmd_position(35, 35, 127);
        cmd_set_loop(35, 0);
        cmd_set_cel(35, 0);
        cmd_ignore_blocks(35);
        cmd_ignore_objs(35);
        cmd_assignn(80, 2);
        cmd_cycle_time(35, 80);
        cmd_draw(35);
        if (!(!cmd_isset(164))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_animate_obj(33);
        cmd_load_view(33);
        cmd_set_view(33, 33);
        cmd_position(33, 42, 142);
        cmd_set_loop(33, 0);
        cmd_set_cel(33, 0);
        cmd_ignore_blocks(33);
        cmd_ignore_objs(33);
        cmd_draw(33);
        cmd_stop_cycling(33);
        cmd_fix_loop(33);
      case 501:
        if (!(!cmd_isset(165))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_animate_obj(223);
        cmd_load_view(223);
        cmd_set_view(223, 223);
        cmd_position(223, 36, 148);
        cmd_set_loop(223, 2);
        cmd_draw(223);
        cmd_stop_cycling(223);
      case 502:
        if (!(!cmd_isset(170))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_animate_obj(234);
        cmd_load_view(234);
        cmd_set_view(234, 234);
        cmd_position(234, 40, 152);
        cmd_set_cel(234, 1);
        cmd_stop_cycling(234);
        cmd_draw(234);
      case 503:
        if (!(cmd_equaln(1, 3))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(80, 159);
        if (!(cmd_lessn(33, 106))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(33, 106);
        jumpTo(1);
        break logicSwitch;
      case 505:
        if (!(cmd_greatern(33, 150))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(33, 150);
      case 506:
      case 1:
        cmd_position_v(0, 80, 33);
        jumpTo(2);
        break logicSwitch;
      case 504:
        cmd_position(0, 152, 136);
        cmd_set_loop(0, 1);
      case 2:
        cmd_assignn(42, 20);
        if (!(!cmd_isset(164))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_load_sound(4);
        cmd_load_sound(41);
        cmd_sound(4, 147);
        jumpTo(3);
        break logicSwitch;
      case 507:
        cmd_load_sound(41);
        cmd_sound(41, 147);
      case 3:
        cmd_draw(0);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (cmd_lessn(42, 40)) {
            cmd_increment(42);
            jumpTo(4);
            break logicSwitch;
          }
          cmd_assignn(42, 20);
          if (!cmd_isset(164)) {
            cmd_reset(147);
            cmd_sound(4, 147);
            jumpTo(4);
            break logicSwitch;
          }
          cmd_reset(147);
          cmd_sound(41, 147);
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
jumpTo(2800, 4);
break logic;
case 28000:
          if (!cmd_isset(165)) {
            cmd_print(m3);
jumptoLineArray = [2800, 28001];
ifSkipArray = [true];
jumpTo(2800, 4);
break logic;
          }
case 28001:
          if (!cmd_isset(170)) {
            cmd_print(m4);
jumptoLineArray = [2800, 28002];
ifSkipArray = [true];
jumpTo(2800, 4);
break logic;
          }
case 28002:
          if (cmd_isset(124)) {
            cmd_print(m5);
jumptoLineArray = [2800, 28003];
ifSkipArray = [true];
jumpTo(2800, 4);
break logic;
          }
case 28003:
          if (!cmd_isset(164)) {
            cmd_set(78);
          }
}
        }
        if ((cmd_said(15, 29) || cmd_said(15, 52) || cmd_isset(78))) {
          cmd_reset(78);
          cmd_print(m6);
jumptoLineArray = [2804];
jumpTo(2804, 4);
break logic;
        }
case 2804:
        if (cmd_said(15, 33)) {
          cmd_print(m7);
jumptoLineArray = [2805];
jumpTo(2805, 4);
break logic;
        }
case 2805:
case 2806:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 53)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m8);
          cmd_print(m9);
jumptoLineArray = [2806, 28000];
ifSkipArray = [true];
jumpTo(2806, 4);
break logic;
case 28000:
          if (!cmd_isset(171)) {
            cmd_set(171);
            cmd_increment(3);
          }
          cmd_print(m10);
jumptoLineArray = [2807];
jumpTo(2807, 4);
break logic;
}
        }
case 2807:
        if (cmd_said(15, 54)) {
          cmd_print(m11);
jumptoLineArray = [2808];
jumpTo(2808, 4);
break logic;
        }
case 2808:
case 2809:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 55)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m12);
          cmd_print(m13);
jumptoLineArray = [2809, 28000];
ifSkipArray = [true];
jumpTo(2809, 4);
break logic;
case 28000:
          if (cmd_isset(124)) {
            cmd_print(m5);
jumptoLineArray = [2809, 28001];
ifSkipArray = [true];
jumpTo(2809, 4);
break logic;
          }
case 28001:
}
        }
case 2811:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(15, 56) || cmd_said(15, 57))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(165)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m14);
jumptoLineArray = [2811, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2811, 4);
break logic;
case 280000:
            jumpTo(5);
            break logicSwitch;
}
          }
          cmd_print(m15);
jumptoLineArray = [2812];
jumpTo(2812, 4);
break logic;
}
        }
case 2812:
      case 5:
case 2813:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15, 58)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_isset(170)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m16);
jumptoLineArray = [2813, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2813, 4);
break logic;
case 280000:
            jumpTo(6);
            break logicSwitch;
}
          }
          cmd_print(m17);
jumptoLineArray = [2814];
jumpTo(2814, 4);
break logic;
}
        }
case 2814:
      case 6:
        if (cmd_isset(124) && (cmd_said(15, 55, 19) || cmd_said(15, 19))) {
          cmd_print(m18);
jumptoLineArray = [2815];
jumpTo(2815, 4);
break logic;
        }
case 2815:
case 2816:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(50, 33)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((!cmd_has(i2)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_get(i2);
            cmd_show_obj(221);
jumptoLineArray = [2816, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2816, 4);
break logic;
case 280000:
            if (!cmd_isset(159)) {
              cmd_set(159);
              cmd_increment(3);
            }
            jumpTo(7);
            break logicSwitch;
}
          }
          cmd_print(m19);
jumptoLineArray = [2817];
jumpTo(2817, 4);
break logic;
}
        }
case 2817:
      case 7:
        if ((cmd_said(41, 29) || cmd_said(41, 52))) {
          cmd_print(m20);
jumptoLineArray = [2818];
jumpTo(2818, 4);
break logic;
        }
case 2818:
        if (!cmd_isset(164) && !cmd_isset(70) && !cmd_isset(74) && cmd_posn(0, 86, 92, 86, 166) && !cmd_isset(80)) {
          cmd_move_obj(0, 86, 132, 1, 80);
        }
        if (cmd_isset(80)) {
          cmd_reset(80);
          cmd_set_loop(0, 1);
          cmd_set_cel(0, 3);
          cmd_program_control();
          cmd_prevent_input();
          cmd_set(70);
          cmd_stop_motion(0);
          cmd_get_posn(33, 82, 83);
          cmd_load_view(201);
          cmd_animate_obj(201);
          cmd_set_view(201, 201);
          cmd_set_loop(201, 1);
          cmd_set_cel(201, 0);
          cmd_position(201, 5, 67);
          cmd_ignore_objs(201);
          cmd_assignn(91, 2);
          cmd_cycle_time(201, 91);
          cmd_draw(201);
          cmd_end_of_loop(201, 121);
        }
        if (cmd_isset(121) && !cmd_isset(74)) {
          cmd_reset(121);
          cmd_set_loop(201, 0);
          cmd_set_cel(201, 0);
          cmd_end_of_loop(201, 122);
        }
case 2819:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(122) && !cmd_isset(74)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(122);
          cmd_set_loop(201, 1);
          cmd_set_cel(201, 0);
          cmd_print(m21);
jumptoLineArray = [2819, 28000];
ifSkipArray = [true];
jumpTo(2819, 4);
break logic;
case 28000:
          cmd_follow_ego(33, 4, 71);
          cmd_normal_cycle(33);
          cmd_erase(201);
}
        }
        if (cmd_isset(71)) {
          cmd_reset(71);
          cmd_stop_cycling(33);
          cmd_set_loop(33, 1);
          cmd_set_cel(33, 0);
          cmd_normal_cycle(33);
          cmd_end_of_loop(33, 72);
        }
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_get_posn(0, 30, 31);
          cmd_decrement(30);
          cmd_increment(31);
          cmd_load_view(5);
          cmd_set_view(1, 5);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_set_priority_v(1, 84);
          cmd_erase(0);
          cmd_draw(1);
          cmd_stop_cycling(1);
          cmd_assignn(91, 2);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(1, 79);
        }
        if (cmd_isset(79)) {
          cmd_reset(79);
          cmd_set_loop(33, 0);
          cmd_set_cel(33, 7);
          cmd_reverse_cycle(33);
          cmd_assignn(92, 1);
          cmd_move_obj_v(33, 82, 83, 92, 73);
        }
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_stop_cycling(33);
          cmd_set_cel(33, 0);
          cmd_addn(30, 24);
          cmd_position_v(0, 30, 31);
          cmd_assignn(35, 1);
          if (!cmd_isset(166)) {
            cmd_set(166);
            cmd_increment(3);
          }
        }
        if (cmd_isset(166) && !cmd_isset(164) && !cmd_isset(74)) {
          if (cmd_posn(0, 86, 92, 86, 166)) {
            cmd_assignn(6, 3);
            cmd_print(m22);
            cmd_print(m23);
jumptoLineArray = [2820];
jumpTo(2820, 4);
break logic;
          }
        }
case 2820:
        if ((cmd_said(59, 60) || cmd_said(61, 60) || cmd_said(62, 60) || cmd_said(62, 60)) && cmd_has(i3)) {
          if (cmd_center_posn(0, 86, 122, 120, 144)) {
            cmd_set(74);
            cmd_get_posn(0, 30, 31);
            cmd_animate_obj(222);
            cmd_load_view(75);
            cmd_set_view(222, 75);
            cmd_position_v(222, 30, 31);
            cmd_set_loop(222, 0);
            cmd_set_cel(222, 0);
            cmd_ignore_blocks(222);
            cmd_ignore_objs(222);
            cmd_move_obj(222, 159, 134, 0, 75);
            cmd_draw(222);
            cmd_drop(i3);
            cmd_prevent_input();
            jumpTo(8);
            break logicSwitch;
          }
          cmd_print(m24);
jumptoLineArray = [2821];
jumpTo(2821, 4);
break logic;
        }
case 2821:
      case 8:
        if (cmd_isset(75)) {
          cmd_reset(75);
          cmd_erase(222);
          cmd_load_view(201);
          cmd_animate_obj(201);
          cmd_set_view(201, 201);
          cmd_set_loop(201, 1);
          cmd_set_cel(201, 0);
          cmd_position(201, 5, 67);
          cmd_ignore_objs(201);
          cmd_assignn(91, 2);
          cmd_cycle_time(201, 91);
          cmd_draw(201);
          cmd_end_of_loop(201, 121);
        }
        if (cmd_isset(121) && cmd_isset(74)) {
          cmd_reset(121);
          cmd_set_loop(201, 0);
          cmd_set_cel(201, 0);
          cmd_end_of_loop(201, 122);
        }
case 2822:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(122) && cmd_isset(74)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(122);
          cmd_set_loop(201, 1);
          cmd_set_cel(201, 0);
          cmd_print(m25);
jumptoLineArray = [2822, 28000];
ifSkipArray = [true];
jumpTo(2822, 4);
break logic;
case 28000:
          cmd_normal_cycle(33);
          cmd_move_obj(33, 159, 136, 2, 76);
          cmd_erase(201);
}
        }
        if (cmd_isset(76)) {
          cmd_reset(76);
          cmd_erase(33);
          cmd_assignn(100, 0);
          cmd_set(77);
          cmd_set(164);
          cmd_increment(3);
        }
        if (cmd_isset(77)) {
          cmd_increment(100);
          if (cmd_equaln(100, 25)) {
            cmd_reset(77);
            cmd_assignn(42, 0);
            cmd_load_sound(100);
            cmd_sound(100, 147);
            cmd_shake_screen(1);
            cmd_reset(74);
            cmd_accept_input();
          }
        }
        if (!(cmd_said(50, 56))) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!(cmd_obj_in_room(i4, 0))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_distance(0, 223, 81);
        if (!(cmd_lessn(81, 20))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_get(i4);
        cmd_erase(223);
        cmd_show_obj(223);
jumptoLineArray = [2823];
jumpTo(2823, 4);
break logic;
case 2823:
        cmd_set(165);
        cmd_increment(3);
        jumpTo(9);
        break logicSwitch;
      case 510:
        cmd_print(m26);
jumptoLineArray = [2824];
jumpTo(2824, 4);
break logic;
case 2824:
      case 9:
        jumpTo(10);
        break logicSwitch;
      case 509:
        cmd_print(m27);
jumptoLineArray = [2825];
jumpTo(2825, 4);
break logic;
case 2825:
      case 508:
      case 10:
        if (!(cmd_said(50, 58))) {
          jumpTo(511);
          break logicSwitch;
        }
        if (!(!cmd_isset(170))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_distance(0, 234, 81);
        if (!(cmd_lessn(81, 20))) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_get(i15);
        cmd_erase(234);
        cmd_show_obj(234);
jumptoLineArray = [2826];
jumpTo(2826, 4);
break logic;
case 2826:
        cmd_set(170);
        cmd_increment(3);
        jumpTo(11);
        break logicSwitch;
      case 513:
        cmd_print(m28);
jumptoLineArray = [2827];
jumpTo(2827, 4);
break logic;
case 2827:
      case 11:
        jumpTo(12);
        break logicSwitch;
      case 512:
        cmd_print(m29);
jumptoLineArray = [2828];
jumpTo(2828, 4);
break logic;
case 2828:
      case 511:
      case 12:
        if ((cmd_said(45, 54) || cmd_said(45, 63, 54) || cmd_said(45, 63, 54) || cmd_said(45, 64, 54) || cmd_said(50, 63, 54) || cmd_said(50, 63, 54) || cmd_said(50, 64, 54))) {
          if (cmd_posn(0, 34, 90, 84, 130)) {
            cmd_program_control();
            cmd_prevent_input();
            cmd_get_posn(0, 30, 31);
            cmd_current_loop(0, 86);
            cmd_erase(0);
            cmd_animate_obj(1);
            cmd_load_view(37);
            cmd_set_view(1, 37);
            cmd_set_loop(1, 1);
            cmd_set_cel(1, 0);
            cmd_subn(30, 5);
            cmd_position_v(1, 30, 31);
            cmd_get_priority(0, 84);
            cmd_set_priority_v(1, 84);
            cmd_normal_cycle(1);
            cmd_ignore_blocks(1);
            cmd_ignore_horizon(1);
            cmd_ignore_objs(1);
            cmd_erase(0);
            cmd_draw(1);
            cmd_end_of_loop(1, 66);
            jumpTo(13);
            break logicSwitch;
          }
          cmd_print(m30);
jumptoLineArray = [2829];
jumpTo(2829, 4);
break logic;
        }
case 2829:
      case 13:
        if (cmd_isset(66)) {
          cmd_reset(66);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 67);
          cmd_move_obj(1, 50, 90, 0, 61);
        }
        if (cmd_isset(61)) {
          cmd_reset(61);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 67);
          cmd_move_obj(1, 50, 112, 0, 62);
        }
case 2830:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(62)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(62);
          cmd_print(m31);
          cmd_print(m32);
          cmd_print(m33);
jumptoLineArray = [2830, 28000];
ifSkipArray = [true];
jumpTo(2830, 4);
break logic;
case 28000:
          cmd_set_loop(1, 3);
          cmd_set_cel(1, 0);
          cmd_assignn(91, 4);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(1, 63);
}
        }
        if (cmd_isset(63)) {
          cmd_reset(63);
          cmd_load_view(38);
          cmd_set_view(1, 38);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 64);
        }
        if (cmd_isset(64)) {
          cmd_reset(64);
          cmd_load_view(39);
          cmd_set_view(1, 39);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 65);
        }
case 2831:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(65)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(65);
          cmd_print(m34);
jumptoLineArray = [2831, 28000];
ifSkipArray = [true];
jumpTo(2831, 4);
break logic;
case 28000:
          cmd_set_priority(1, 9);
          cmd_assignn(35, 1);
          if (!cmd_isset(167)) {
            cmd_set(167);
            cmd_increment(3);
          }
}
        }
case 2832:
ifSkip = ifSkipArrayShift();
        if (((cmd_said(50, 55, 19) || cmd_said(50, 19))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_has(i12)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m35);
jumptoLineArray = [2832, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2832, 4);
break logic;
case 280000:
            jumpTo(14);
            break logicSwitch;
}
          }
          if (cmd_isset(124)) {
            cmd_set(83);
            jumpTo(14);
            break logicSwitch;
          }
          cmd_print(m36);
jumptoLineArray = [2833];
jumpTo(2833, 4);
break logic;
}
        }
case 2833:
      case 14:
case 2834:
ifSkip = ifSkipArrayShift();
        if (((cmd_isset(83) || cmd_said(50, 55) || cmd_said(65, 55))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(83);
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_posn(0, 40, 122, 46, 134)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m37);
jumptoLineArray = [2834, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2834, 4);
break logic;
case 280000:
            cmd_program_control();
            cmd_prevent_input();
            cmd_get_posn(0, 30, 31);
            cmd_load_view(10);
            cmd_set_view(1, 10);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_subn(30, 7);
            cmd_position_v(1, 30, 31);
            cmd_get_priority(0, 84);
            cmd_set_priority_v(1, 84);
            cmd_normal_cycle(1);
            cmd_ignore_blocks(1);
            cmd_ignore_objs(1);
            cmd_erase(0);
            cmd_draw(1);
            cmd_assignn(91, 4);
            cmd_cycle_time(1, 91);
            cmd_end_of_loop(1, 69);
            jumpTo(15);
            break logicSwitch;
}
          }
          cmd_print(m38);
jumptoLineArray = [2835];
jumpTo(2835, 4);
break logic;
}
        }
case 2835:
      case 15:
        if (cmd_isset(69)) {
          cmd_reset(69);
          cmd_current_loop(1, 86);
          cmd_increment(86);
          if (cmd_greatern(86, 2)) {
            cmd_reset(69);
            cmd_assignn(35, 1);
            if (!cmd_isset(168)) {
              cmd_set(168);
              cmd_increment(3);
            }
            jumpTo(16);
            break logicSwitch;
          }
          cmd_set_loop_v(1, 86);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 69);
        }
      case 16:
case 2836:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(124) && (cmd_said(50, 55, 19, 66) || cmd_said(50, 19, 66))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_has(i12)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m35);
jumptoLineArray = [2836, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2836, 4);
break logic;
case 280000:
            jumpTo(17);
            break logicSwitch;
}
          }
          cmd_set(83);
}
        }
      case 17:
case 2837:
ifSkip = ifSkipArrayShift();
        if (((cmd_isset(83) || cmd_said(50, 55, 66) || cmd_said(66, 66))) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(83);
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_has(i12)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m39);
jumptoLineArray = [2837, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2837, 4);
break logic;
case 280000:
            jumpTo(18);
            break logicSwitch;
}
          }
          if (cmd_posn(0, 40, 122, 46, 134)) {
            cmd_program_control();
            cmd_prevent_input();
            cmd_get_posn(0, 30, 31);
            cmd_load_view(10);
            cmd_set_view(1, 10);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_subn(30, 7);
            cmd_position_v(1, 30, 31);
            cmd_get_priority(0, 84);
            cmd_set_priority_v(1, 84);
            cmd_normal_cycle(1);
            cmd_ignore_blocks(1);
            cmd_ignore_objs(1);
            cmd_erase(0);
            cmd_draw(1);
            cmd_assignn(91, 4);
            cmd_cycle_time(1, 91);
            cmd_end_of_loop(1, 100);
            cmd_set(81);
            jumpTo(18);
            break logicSwitch;
          }
          cmd_print(m38);
jumptoLineArray = [2838];
jumpTo(2838, 4);
break logic;
}
        }
case 2838:
      case 18:
        if (!(cmd_isset(82))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_current_cel(1, 87);
        if (!(cmd_equaln(87, 0))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_reset(82);
        cmd_drop(i9);
        cmd_get(i11);
        if (!(cmd_isset(169))) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_reset(124);
        cmd_get(i12);
        cmd_show_obj(231);
jumptoLineArray = [2839];
jumpTo(2839, 4);
break logic;
case 2839:
        if (!(!cmd_isset(172))) {
          jumpTo(517);
          break logicSwitch;
        }
        cmd_set(172);
        cmd_increment(3);
      case 517:
        jumpTo(19);
        break logicSwitch;
      case 516:
        cmd_show_obj(230);
jumptoLineArray = [2840];
jumpTo(2840, 4);
break logic;
case 2840:
      case 19:
        cmd_erase(1);
        cmd_draw(0);
        cmd_accept_input();
        cmd_player_control();
      case 515:
      case 514:
        if (cmd_isset(81)) {
          cmd_current_cel(1, 87);
          if (cmd_equaln(87, 4)) {
            cmd_reset(81);
            cmd_set(82);
            cmd_stop_cycling(1);
            if (cmd_isset(169)) {
              cmd_set_loop(254, 0);
              cmd_last_cel(254, 88);
              cmd_set_cel_v(254, 88);
              cmd_reverse_loop(254, 84);
              jumpTo(20);
              break logicSwitch;
            }
            cmd_reverse_cycle(1);
          }
        }
      case 20:
        if (cmd_isset(84)) {
          cmd_reset(84);
          cmd_set(133);
          cmd_reverse_cycle(1);
        }
        if (!cmd_isset(74) && cmd_equaln(2, 2)) {
          cmd_reset(124);
          cmd_new_room(3);
          if (AGI.break_all_logics) return;
        }
        return;

    }
  }
}
MESSAGES[4] = [
  "",
  "This is the end of the well, or if you prefer, the well's end. Does that mean this is the well's all?",
  "This obviously has become someone's lair. There is a bed against the cave wall, and a fire is burning.",
  "Next to the fire, you see a bottle of something.",
  "Next to the fire, you see some bellows.",
  "There is a Fire Elemental burning in the fire pit.",
  "A large green, reptilian adolescent is staring at you. In his hand is quite the menacing sword. You might not want to get too close to the cut of that blade.",
  "Like a rock.",
  "stalactite\n[stuh-lak-tahyt,\n stal-uhk-tahyt]\nnoun\n\nA deposit, usually of calcium carbonate, shaped like an icicle, hanging from the roof of a cave or the like, and formed by the dripping of percolating calcareous water.\n\n\"stalactite.\" Dictionary_com Unabridged. Random House, Inc.",
  "stalagmite\n[stuh-lag-mahyt,\n stal-uhg-mahyt]\nnoun\n\nA deposit, usually of calcium carbonate, more or less resembling an inverted stalactite, formed on the floor of a cave or the like by the dripping of percolating calcareous water.\n\n\"stalagmite.\" Dictionary_com Unabridged. Random House, Inc.",
  "See, you learned something today.",
  "Are you tired of this quest already? Maybe you should get some rest. Go on, jump into bed!",
  "The fire mesmerizes you...",
  "Fryer! Fryer! Fryer!",
  "You see a lovely bottle of lotion. Oh the things you could do with that... Wait! What?",
  "Are you seeing lotions that aren't there? You might need to talk to someone about that.",
  "Ahh, bellows, that's how the fire rages on 'til the break of dawn.",
  "You do not see what you could have once seen.",
  "A majestic Fire Elemental. It's burning, it's burning, it's burning for you.",
  "How many rocks do you need?",
  "The abnormally large tortoise has no interest in talking to you.\nSeriously, why do you even bother trying to be polite these days.",
  "\"Hey you!\", the tortoise man yells, \"What do you think this is?\"",
  "He didn't cut you no slack.",
  "You've sure learned your lesson. Better stay away from that tortoise, or find a way to get rid of him.",
  "Maybe you should put the rabbit down somewhere under the stalagmite, so the tortoise can see it.",
  "\"Oh!  The rabbit wants to race!  Come back rabbit!\"",
  "Using your mind, you try and will the lotion into your hands. Hmm, didn't work. Get closer.",
  "There is no lotion to get.",
  "You'll have to get closer.",
  "There are no bellows to get.",
  "You can't jump that far. Get closer.",
  "This is a comfortable bed. You could rest here for a whi...",
  "Hold on...",
  "Something's moving...",
  "You've had better naps.",
  "You're already hot enough!",
  "You don't see that...",
  "There has to be a better way to get some fire.  Oh well, let's give it a try.",
  "The easiest way to reach the fire is to stand to the right of it.",
  "How much fire do you really need to be carrying with you?"
];
CONTROLS[4] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4>.Uy>4>!s!Q<.!>rA.rV<.Z>Z6A<9Q<.9>KM<lQ<^>9BK6<+Q<g<.{GZ6<.9V<9<.xMr6<.gQ.^<.ZM+6<.^V.Z<.9R.96>EV.4<+M.Z6>lVx<xG.!6>+VP<r596.^6>.KL<l5E6.^6>.g<l5K6.!6>.g<g5P6.^6>.Z<Z5U6.^6.xQ<.g<U5g6.xB.r5UA<.U<P5l6.lB.x5l5<.P<K5x6.UB.!5x5<.K<K5x6.KB.^5!5<.K<E5!6.9B.{5^5<.E<95+6{B.,5{5<.9<45{6^B<95{5<.9.,5,6xB<K5{5<.9.,5.46gB<U5{5<.9.{5.96UB<g5+5<.E.+5.KR<r5+5<.E.+5gG<.g5^5<.K.^5UGK6<.gFl5<.P.^5P6g6<.rh<.U.^5P6g6><.Z.!5U6l6><.U.!5P6r6><.U.!5P6r6><.U.x5U6r6><.U.x5U6r6><.U.x5U6x6><.P.r5Z6x6><.P.r5g6r6><.P.r5g6r6><.P.l5r6g6><.U.l5r6Z6><.Z.l5xGE6><.g.g5{B><.l.g5/l.g5/l.Z5/r.Z5/r.Z5/r.Z5/r.Z5/r.g5/l.g5/l.g5/l.g5/l.g5/l.g5/l.l5/g.l5/g.r5/Z.r5/Z.r5/Z.x5/U.x5/U.!5/EA.!5><.,FE.^5><.xLU.+A><.UFr.,5><.9F^<45><^L,<9A><gF.K<KA><KA.Z<UF>.{A.l<lL>.gF.x<^A>.KA.+<{><.A";
