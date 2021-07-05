window.logic14 = function() {
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
          cmd_load_view(140);
          cmd_animate_obj(140);
          cmd_set_view(140, 140);
          cmd_set_loop(140, 0);
          cmd_set_cel(140, 0);
          cmd_set_priority(140, 5);
          cmd_ignore_blocks(140);
          cmd_ignore_horizon(140);
          cmd_ignore_objs(140);
          cmd_set(74);
          cmd_load_view(141);
          cmd_animate_obj(141);
          cmd_set_view(141, 141);
          cmd_set_loop(141, 0);
          cmd_set_cel(141, 0);
          cmd_set_priority(141, 4);
          cmd_ignore_blocks(141);
          cmd_ignore_horizon(141);
          cmd_ignore_objs(141);
          cmd_set(81);
          cmd_animate_obj(143);
          cmd_set_view(143, 141);
          cmd_set_loop(143, 0);
          cmd_set_cel(143, 0);
          cmd_set_priority(143, 4);
          cmd_ignore_blocks(143);
          cmd_ignore_horizon(143);
          cmd_ignore_objs(143);
          cmd_set(95);
          cmd_load_view(142);
          cmd_animate_obj(142);
          cmd_set_view(142, 142);
          cmd_set_loop(142, 0);
          cmd_set_cel(142, 0);
          cmd_set_priority(142, 6);
          cmd_ignore_blocks(142);
          cmd_ignore_horizon(142);
          cmd_ignore_objs(142);
          cmd_set(88);
          cmd_load_view(143);
          cmd_animate_obj(144);
          cmd_set_view(144, 143);
          cmd_set_loop(144, 1);
          cmd_set_cel(144, 0);
          cmd_set_priority(144, 11);
          cmd_ignore_blocks(144);
          cmd_ignore_horizon(144);
          cmd_ignore_objs(144);
          cmd_position(144, 65, 128);
          cmd_start_cycling(144);
          cmd_assignn(91, 2);
          cmd_cycle_time(144, 91);
          cmd_draw(144);
          cmd_load_view(144);
          cmd_animate_obj(145);
          cmd_set_view(145, 144);
          cmd_set_loop(145, 0);
          cmd_set_cel(145, 0);
          cmd_set_priority(145, 11);
          cmd_ignore_blocks(145);
          cmd_ignore_horizon(145);
          cmd_ignore_objs(145);
          cmd_position(145, 44, 144);
          cmd_stop_cycling(145);
          cmd_draw(145);
          cmd_load_view(206);
          cmd_animate_obj(206);
          cmd_set_view(206, 206);
          cmd_set_loop(206, 0);
          cmd_set_cel(206, 0);
          cmd_position(206, 5, 67);
          cmd_set_priority(206, 15);
          cmd_ignore_blocks(206);
          cmd_ignore_horizon(206);
          cmd_ignore_objs(206);
          cmd_position(0, 118, 120);
          cmd_draw(0);
          cmd_assignn(42, 0);
          cmd_load_sound(14);
          cmd_sound(14, 147);
          cmd_show_pic();
        }
        if (cmd_isset(147) && !cmd_isset(148)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(1);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(14, 147);
        }
      case 1:
        if (cmd_said(15, 29)) {
          cmd_print(m1);
jumptoLineArray = [2800];
jumpTo(2800, 14);
break logic;
        }
case 2800:
        if (cmd_said(15, 119)) {
          cmd_print(m2);
jumptoLineArray = [2801];
jumpTo(2801, 14);
break logic;
        }
case 2801:
        if (cmd_said(15, 33)) {
          cmd_print(m3);
jumptoLineArray = [2802];
jumpTo(2802, 14);
break logic;
        }
case 2802:
        if (cmd_said(15, 34)) {
          cmd_print(m4);
jumptoLineArray = [2803];
jumpTo(2803, 14);
break logic;
        }
case 2803:
        if (cmd_said(15, 35)) {
          cmd_print(m5);
jumptoLineArray = [2804];
jumpTo(2804, 14);
break logic;
        }
case 2804:
        if (cmd_said(15, 39)) {
          cmd_print(m6);
jumptoLineArray = [2805];
jumpTo(2805, 14);
break logic;
        }
case 2805:
        if (cmd_said(15, 40)) {
          cmd_print(m7);
          cmd_print(m8);
          cmd_print(m9);
          cmd_print(m10);
jumptoLineArray = [2806];
jumpTo(2806, 14);
break logic;
        }
case 2806:
        if ((cmd_said(15, 120) || cmd_said(15))) {
          cmd_print(m11);
          cmd_print(m12);
          cmd_print(m13);
jumptoLineArray = [2807];
jumpTo(2807, 14);
break logic;
        }
case 2807:
case 2808:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(41, 29)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_prevent_input();
          if (cmd_equaln(77, 0)) {
            cmd_print(m14);
jumptoLineArray = [2808, 28000];
ifSkipArray = [true];
jumpTo(2808, 14);
break logic;
          }
case 28000:
          cmd_assignn(91, 2);
          cmd_cycle_time(206, 91);
          cmd_draw(206);
          cmd_end_of_loop(206, 121);
}
        }
case 2809:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(121)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          if ((cmd_equaln(77, 0))) {
            cmd_print(m15);
            cmd_print(m16);
jumptoLineArray = [2809, 28000];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28000:
          if ((cmd_equaln(77, 1))) {
            cmd_print(m17);
            cmd_print(m18);
jumptoLineArray = [2809, 28001];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28001:
          if ((cmd_equaln(77, 2))) {
            cmd_print(m19);
jumptoLineArray = [2809, 28002];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28002:
          if ((cmd_equaln(77, 3))) {
            cmd_print(m20);
jumptoLineArray = [2809, 28003];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28003:
          if ((cmd_equaln(77, 4))) {
            cmd_print(m21);
jumptoLineArray = [2809, 28004];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28004:
          if ((cmd_equaln(77, 5))) {
            cmd_print(m22);
jumptoLineArray = [2809, 28005];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28005:
          if ((cmd_equaln(77, 6))) {
            cmd_print(m23);
jumptoLineArray = [2809, 28006];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28006:
          if ((cmd_equaln(77, 7))) {
            cmd_print(m24);
jumptoLineArray = [2809, 28007];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28007:
          if ((cmd_equaln(77, 8))) {
            cmd_print(m25);
jumptoLineArray = [2809, 28008];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28008:
          if ((cmd_equaln(77, 9))) {
            cmd_print(m26);
jumptoLineArray = [2809, 28009];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28009:
          if ((cmd_equaln(77, 10))) {
            cmd_print(m27);
jumptoLineArray = [2809, 28010];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28010:
          if ((cmd_equaln(77, 11))) {
            cmd_print(m28);
jumptoLineArray = [2809, 28011];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28011:
          if ((cmd_equaln(77, 12))) {
            cmd_print(m29);
jumptoLineArray = [2809, 28012];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28012:
          if ((cmd_equaln(77, 13))) {
            cmd_print(m30);
jumptoLineArray = [2809, 28013];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28013:
          if ((cmd_equaln(77, 14))) {
            cmd_print(m31);
jumptoLineArray = [2809, 28014];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28014:
          if ((cmd_equaln(77, 15))) {
            cmd_print(m32);
jumptoLineArray = [2809, 28015];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28015:
          if ((cmd_equaln(77, 16))) {
            cmd_print(m33);
            cmd_print(m34);
            cmd_print(m35);
            cmd_print(m36);
jumptoLineArray = [2809, 28016];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28016:
          if ((cmd_equaln(77, 17))) {
            cmd_print(m37);
jumptoLineArray = [2809, 28017];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28017:
          if ((cmd_equaln(77, 18))) {
            cmd_print(m38);
jumptoLineArray = [2809, 28018];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28018:
          if ((cmd_equaln(77, 19))) {
            cmd_print(m39);
jumptoLineArray = [2809, 28019];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28019:
          if ((cmd_equaln(77, 20))) {
            cmd_print(m40);
jumptoLineArray = [2809, 28020];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28020:
          if ((cmd_equaln(77, 21))) {
            cmd_print(m41);
jumptoLineArray = [2809, 28021];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28021:
          if ((cmd_equaln(77, 22))) {
            cmd_print(m42);
jumptoLineArray = [2809, 28022];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28022:
          if ((cmd_equaln(77, 23))) {
            cmd_print(m43);
jumptoLineArray = [2809, 28023];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28023:
          if ((cmd_equaln(77, 24))) {
            cmd_print(m44);
            cmd_print(m45);
            cmd_print(m46);
jumptoLineArray = [2809, 28024];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28024:
          if ((cmd_equaln(77, 25))) {
            cmd_print(m47);
            cmd_print(m48);
jumptoLineArray = [2809, 28025];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28025:
          if ((cmd_equaln(77, 26))) {
            cmd_print(m49);
            cmd_print(m50);
            cmd_print(m51);
jumptoLineArray = [2809, 28026];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28026:
          if ((cmd_equaln(77, 27))) {
            cmd_print(m52);
jumptoLineArray = [2809, 28027];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28027:
          if ((cmd_equaln(77, 28))) {
            cmd_print(m53);
            cmd_print(m54);
jumptoLineArray = [2809, 28028];
ifSkipArray = [true];
jumpTo(2809, 14);
break logic;
          }
case 28028:
          cmd_reset(121);
          if (cmd_equaln(77, 28)) {
            cmd_set_loop(206, 0);
            cmd_set_cel(206, 0);
            cmd_erase(206);
            cmd_accept_input();
            if (!cmd_isset(240)) {
              cmd_set(240);
              cmd_increment(3);
            }
            jumpTo(2);
            break logicSwitch;
          }
          cmd_set_loop(206, 1);
          cmd_set_cel(206, 0);
          cmd_assignn(91, 4);
          cmd_cycle_time(206, 91);
          cmd_end_of_loop(206, 122);
          cmd_increment(77);
}
        }
      case 2:
        if (cmd_isset(122)) {
          cmd_reset(122);
          cmd_set_loop(206, 0);
          cmd_random(0, 5, 80);
          cmd_set_cel_v(206, 80);
          cmd_assignn(91, 2);
          cmd_cycle_time(206, 91);
          cmd_end_of_loop(206, 121);
        }
        if ((cmd_said(45) || cmd_said(45, 109))) {
          cmd_program_control();
          cmd_prevent_input();
          cmd_get_posn(0, 30, 31);
          cmd_erase(0);
          cmd_animate_obj(1);
          cmd_load_view(3);
          cmd_set_view(1, 3);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_subn(30, 2);
          cmd_position_v(1, 30, 31);
          cmd_normal_cycle(1);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_set_priority(1, 15);
          cmd_draw(1);
          cmd_stop_cycling(1);
          cmd_end_of_loop(1, 63);
        }
        if (cmd_isset(63)) {
          cmd_reset(63);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_assignn(92, 2);
          cmd_step_size(1, 92);
          cmd_end_of_loop(1, 64);
          cmd_assignn(60, 92);
          cmd_assignn(61, 97);
          cmd_assignn(62, 0);
          cmd_move_obj_v(1, 60, 61, 62, 60);
        }
        if (cmd_isset(60)) {
          cmd_reset(60);
          cmd_move_obj(1, 92, 167, 0, 62);
        }
        if (cmd_isset(62)) {
          cmd_reset(62);
          cmd_assignn(92, 1);
          cmd_step_size(1, 92);
          cmd_move_obj(1, 92, 167, 0, 61);
        }
        if (cmd_isset(61)) {
          cmd_reset(61);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 65);
        }
        if (cmd_isset(65)) {
          cmd_reset(65);
          cmd_position(1, 115, 37);
          cmd_set_loop(1, 3);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 66);
        }
        if (cmd_isset(66)) {
          cmd_reset(66);
          cmd_assignn(92, 2);
          cmd_step_size(1, 92);
          cmd_move_obj(1, 115, 120, 0, 67);
        }
        if (cmd_isset(67)) {
          cmd_reset(67);
          cmd_set_loop(1, 4);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 68);
        }
case 2838:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(68)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(68);
          cmd_get_posn(1, 30, 31);
          cmd_erase(1);
          cmd_set_loop(0, 2);
          cmd_set_cel(0, 0);
          cmd_addn(30, 2);
          cmd_position_v(0, 30, 31);
          cmd_draw(0);
          if (!cmd_isset(241)) {
            cmd_set(241);
            cmd_increment(3);
          }
          cmd_print(m55);
jumptoLineArray = [2838, 28000];
ifSkipArray = [true];
jumpTo(2838, 14);
break logic;
case 28000:
          cmd_accept_input();
          cmd_player_control();
}
        }
case 2839:
ifSkip = ifSkipArrayShift();
        if ((cmd_isset(105)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_reset(105);
          cmd_print(m56);
jumptoLineArray = [2839, 28000];
ifSkipArray = [true];
jumpTo(2839, 14);
break logic;
case 28000:
          cmd_new_room(7);
          if (AGI.break_all_logics) return;
          return;
}
        }
        if (cmd_isset(75)) {
          cmd_decrement(100);
          cmd_reposition_to_v(140, 100, 101);
          if (cmd_equaln(100, 147)) {
            cmd_reset(75);
          }
        }
        if (!(cmd_isset(74))) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_reset(74);
        cmd_random(21, 146, 101);
        cmd_random(0, 1, 102);
        cmd_random(1, 2, 103);
        cmd_step_size(140, 103);
        if (!(cmd_equaln(102, 0))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_assignn(100, 0);
        cmd_set_loop(140, 1);
        cmd_last_cel(140, 87);
        cmd_set_cel_v(140, 87);
        jumpTo(3);
        break logicSwitch;
      case 501:
        cmd_assignn(100, 159);
        cmd_set_loop(140, 0);
        cmd_last_cel(140, 87);
        cmd_decrement(87);
        cmd_set_cel_v(140, 87);
        cmd_set(75);
      case 3:
        cmd_position_v(140, 100, 101);
        cmd_draw(140);
        cmd_reverse_loop(140, 76);
      case 500:
        if (!(cmd_isset(76))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_reset(76);
        if (!(cmd_equaln(102, 0))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_set_loop(140, 0);
        cmd_assignn(90, 3);
        jumpTo(4);
        break logicSwitch;
      case 503:
        cmd_set_loop(140, 1);
        cmd_assignn(90, 7);
      case 4:
        cmd_set_cel(140, 0);
        cmd_set_dir(140, 90);
        cmd_stop_cycling(140);
      case 502:
        cmd_get_posn(140, 100, 101);
        if (cmd_equaln(102, 0) && cmd_equaln(100, 147)) {
          cmd_set(70);
          cmd_assignn(102, 2);
        }
        if (cmd_isset(70)) {
          cmd_reset(70);
          cmd_set_cel(140, 1);
          cmd_end_of_loop(140, 71);
        }
        if (cmd_isset(71)) {
          cmd_reset(71);
          cmd_erase(140);
          cmd_set(74);
        }
        if (cmd_equaln(102, 1) && cmd_equaln(100, 0)) {
          cmd_set(72);
          cmd_assignn(102, 2);
        }
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_set_cel(140, 1);
          cmd_end_of_loop(140, 73);
        }
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_erase(140);
          cmd_set(74);
        }
        if (cmd_isset(82)) {
          cmd_decrement(104);
          cmd_reposition_to_v(141, 104, 105);
          if (cmd_equaln(104, 152)) {
            cmd_reset(82);
          }
        }
        if (!(!cmd_lessn(112, 20) && cmd_isset(81))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_reset(81);
        cmd_random(16, 151, 105);
        cmd_random(0, 1, 106);
        cmd_random(1, 3, 107);
        cmd_step_size(141, 107);
        if (!(cmd_equaln(106, 0))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(104, 0);
        cmd_set_loop(141, 1);
        cmd_last_cel(141, 87);
        cmd_set_cel_v(141, 87);
        jumpTo(5);
        break logicSwitch;
      case 505:
        cmd_assignn(104, 159);
        cmd_set_loop(141, 0);
        cmd_last_cel(141, 87);
        cmd_decrement(87);
        cmd_set_cel_v(141, 87);
        cmd_set(82);
      case 5:
        cmd_position_v(141, 104, 105);
        cmd_draw(141);
        cmd_reverse_loop(141, 83);
      case 504:
        if (!(cmd_isset(83))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_reset(83);
        if (!(cmd_equaln(106, 0))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_set_loop(141, 0);
        cmd_assignn(90, 3);
        jumpTo(6);
        break logicSwitch;
      case 507:
        cmd_set_loop(141, 1);
        cmd_assignn(90, 7);
      case 6:
        cmd_set_cel(141, 0);
        cmd_set_dir(141, 90);
        cmd_stop_cycling(141);
      case 506:
        cmd_get_posn(141, 104, 105);
        if (cmd_equaln(106, 0) && cmd_equaln(104, 152)) {
          cmd_set(77);
          cmd_assignn(106, 2);
        }
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_set_cel(141, 1);
          cmd_end_of_loop(141, 78);
        }
        if (cmd_isset(78)) {
          cmd_reset(78);
          cmd_erase(141);
          cmd_set(81);
        }
        if (cmd_equaln(106, 1) && cmd_equaln(104, 0)) {
          cmd_set(79);
          cmd_assignn(106, 2);
        }
        if (cmd_isset(79)) {
          cmd_reset(79);
          cmd_set_cel(141, 1);
          cmd_end_of_loop(141, 80);
        }
        if (cmd_isset(80)) {
          cmd_reset(80);
          cmd_erase(141);
          cmd_set(81);
        }
        if (cmd_isset(89)) {
          cmd_decrement(108);
          cmd_reposition_to_v(142, 108, 109);
          if (cmd_equaln(108, 140)) {
            cmd_reset(89);
          }
        }
        if (!(!cmd_lessn(112, 80) && cmd_isset(88))) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_reset(88);
        cmd_random(40, 127, 109);
        cmd_random(0, 1, 110);
        cmd_assignn(111, 1);
        cmd_step_size(142, 111);
        if (!(cmd_equaln(110, 0))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_assignn(108, 0);
        cmd_set_loop(142, 1);
        cmd_last_cel(142, 87);
        cmd_set_cel_v(142, 87);
        jumpTo(7);
        break logicSwitch;
      case 509:
        cmd_assignn(108, 159);
        cmd_set_loop(142, 0);
        cmd_last_cel(142, 87);
        cmd_decrement(87);
        cmd_set_cel_v(142, 87);
        cmd_set(89);
      case 7:
        cmd_position_v(142, 108, 109);
        cmd_draw(142);
        cmd_reverse_loop(142, 90);
      case 508:
        if (!(cmd_isset(90))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_reset(90);
        if (!(cmd_equaln(110, 0))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_set_loop(142, 0);
        cmd_assignn(90, 3);
        jumpTo(8);
        break logicSwitch;
      case 511:
        cmd_set_loop(142, 1);
        cmd_assignn(90, 7);
      case 8:
        cmd_set_cel(142, 0);
        cmd_set_dir(142, 90);
        cmd_stop_cycling(142);
      case 510:
        cmd_get_posn(142, 108, 109);
        if (cmd_equaln(110, 0) && cmd_equaln(108, 140)) {
          cmd_set(84);
          cmd_assignn(110, 2);
        }
        if (cmd_isset(84)) {
          cmd_reset(84);
          cmd_set_cel(142, 1);
          cmd_end_of_loop(142, 85);
        }
        if (cmd_isset(85)) {
          cmd_reset(85);
          cmd_erase(142);
          cmd_set(88);
        }
        if (cmd_equaln(110, 1) && cmd_equaln(108, 0)) {
          cmd_set(86);
          cmd_assignn(110, 2);
        }
        if (cmd_isset(86)) {
          cmd_reset(86);
          cmd_set_cel(142, 1);
          cmd_end_of_loop(142, 87);
        }
        if (cmd_isset(87)) {
          cmd_reset(87);
          cmd_erase(142);
          cmd_set(88);
        }
        if (cmd_isset(96)) {
          cmd_decrement(113);
          cmd_reposition_to_v(143, 113, 114);
          if (cmd_equaln(113, 152)) {
            cmd_reset(96);
          }
        }
        if (!(!cmd_lessn(112, 40) && cmd_isset(95))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_reset(95);
        cmd_random(16, 151, 114);
        cmd_random(0, 1, 115);
        cmd_random(1, 3, 116);
        cmd_step_size(143, 116);
        if (!(cmd_equaln(115, 0))) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_assignn(113, 0);
        cmd_set_loop(143, 1);
        cmd_last_cel(143, 87);
        cmd_set_cel_v(143, 87);
        jumpTo(9);
        break logicSwitch;
      case 513:
        cmd_assignn(113, 159);
        cmd_set_loop(143, 0);
        cmd_last_cel(143, 87);
        cmd_decrement(87);
        cmd_set_cel_v(143, 87);
        cmd_set(96);
      case 9:
        cmd_position_v(143, 113, 114);
        cmd_draw(143);
        cmd_reverse_loop(143, 97);
      case 512:
        if (!(cmd_isset(97))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_reset(97);
        if (!(cmd_equaln(115, 0))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_set_loop(143, 0);
        cmd_assignn(90, 3);
        jumpTo(10);
        break logicSwitch;
      case 515:
        cmd_set_loop(143, 1);
        cmd_assignn(90, 7);
      case 10:
        cmd_set_cel(143, 0);
        cmd_set_dir(143, 90);
        cmd_stop_cycling(143);
      case 514:
        cmd_get_posn(143, 113, 114);
        if (cmd_equaln(115, 0) && cmd_equaln(113, 152)) {
          cmd_set(91);
          cmd_assignn(115, 2);
        }
        if (cmd_isset(91)) {
          cmd_reset(91);
          cmd_set_cel(143, 1);
          cmd_end_of_loop(143, 92);
        }
        if (cmd_isset(92)) {
          cmd_reset(92);
          cmd_erase(143);
          cmd_set(95);
        }
        if (cmd_equaln(115, 1) && cmd_equaln(113, 0)) {
          cmd_set(93);
          cmd_assignn(115, 2);
        }
        if (cmd_isset(93)) {
          cmd_reset(93);
          cmd_set_cel(143, 1);
          cmd_end_of_loop(143, 94);
        }
        if (cmd_isset(94)) {
          cmd_reset(94);
          cmd_erase(143);
          cmd_set(95);
        }
        if (cmd_lessn(112, 80)) {
          cmd_increment(112);
        }
        return;

    }
  }
}
MESSAGES[14] = [
  "",
  "He's relaxing watching his favorite show.",
  "You can't see what the man is watching, but you bet it's a rerun.",
  "Floating rocks are about all that's going on in here.",
  "You call that sky? You stay inside too much.",
  "Nope. There are none.",
  "There seems to be no way out.",
  "The man has a lawn.",
  "How does he mow his lawn?",
  "Hmmm...",
  "He probably grazes.",
  "What you see is what you get in the surreality of limbo.",
  "A whole lot of nothing.",
  "Well, except for that man watching TV.",
  "You yell over to the man, \"Hello!\"",
  "\"Why hello! Don't get many visitors around these parts. What brings you here?\"",
  "You tell him about your harrowing ordeal.",
  "\"That's similar to what happened to me.\"",
  "You ask the man how he ended up here.",
  "\"I was young once.",
  "\"Just a whippersnapper.",
  "\"Still wet behind the ears.",
  "\"I had my whole life ahead of me.",
  "\"The possibilities were endless.",
  "\"Then one day while I was selling my wares at a local market, I met a fine lady...",
  "\"She took me home and made me breakfast.",
  "\"It was quite tasty.",
  "\"Flapjacks.",
  "\"Hash browns.",
  "\"Tuna on rye.",
  "\"I was loving it. But there was no chemistry between me and this very fine lady.",
  "\"So to make a long story short. I decided to leave her place.",
  "\"On my way home I saw something I shouldn't have seen.",
  "\"So I looked away. Didn't want to see that.\"",
  "See what? You wonder if this is really going somewhere...",
  "You'd like to tell the man that you don't have all day.",
  "But alas, you do.",
  "\"So after I averted my eyes and continued on, I came to a fork in the road.",
  "\"I kicked the fork aside so no one would step on it.",
  "\"That's when I noticed there was a man standing there.",
  "\"I would have already seen him if I hadn't averted my eyes earlier.",
  "\"The fork was resting on his shoe.",
  "\"He scowled at me.",
  "\"The next thing I knew I was here on this rock.",
  "\"Not one of my best days.\"",
  "You couldn't agree more.",
  "You ask the aged man how long he has been here.",
  "\"Since I was just a wee lad.\"",
  "You ask if the man has any idea how to get out of here.",
  "\"If I did, you wouldn't have anyone to talk to right now. Would you?\"",
  "You wonder if this is your fate.",
  "You ask the man how he copes.",
  "\"This TV appeared one day, so it helps, but...",
  "\"Honestly, I wish I could just end it all.\"",
  "This man certainly gives you hope.",
  "That obviously did not work.",
  "Wait!"
];
CONTROLS[14] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4><.9n<Z><riri.{><l6.rb.g><l6<46.Z><g6<EB.P><g6<P6.K><g6<U6.E><g6<ZB.4><g6<l6,><Z6<r6,><Z6<x6{><Z6<x6{><Z6<x6{><Z6<!6+><U6<^6+><U6<^6+><P6<+6+><P6<{6^><U6<+6^><Z6<!6+><Z6<!6+><g6<r6{><l6<l6{><rB<KG,><!M.!M.E><,z^M.Z><.x#.x?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4";
