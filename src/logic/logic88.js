window.logic88 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!cmd_isset(123)) {
          jumpTo(500);
          break logicSwitch;
        }
        if (!(cmd_equaln(0, 8) && !cmd_has(i16))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_assignn(75, 56);
        cmd_subn(75, 11);
        cmd_assignn(76, 156);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 126);
        jumpTo(1);
        break logicSwitch;
      case 501:
        if (!(cmd_equaln(0, 4) && !cmd_has(i12))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_assignn(75, 33);
        cmd_subn(75, 11);
        cmd_assignn(76, 121);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 128);
        jumpTo(1);
        break logicSwitch;
      case 502:
        if (!(cmd_equaln(0, 5) && !cmd_has(i14))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_assignn(75, 138);
        cmd_subn(75, 11);
        cmd_assignn(76, 148);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 129);
        jumpTo(1);
        break logicSwitch;
      case 503:
        if (!(cmd_equaln(0, 15) && !cmd_has(i18))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(75, 70);
        cmd_subn(75, 11);
        cmd_assignn(76, 95);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 130);
        jumpTo(1);
        break logicSwitch;
      case 504:
        if (!(cmd_equaln(0, 7) && !cmd_has(i19))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(75, 19);
        cmd_subn(75, 11);
        cmd_assignn(76, 110);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 127);
        jumpTo(1);
        break logicSwitch;
      case 505:
        if (!cmd_equaln(0, 9)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(75, 30);
        cmd_subn(75, 11);
        cmd_assignn(76, 82);
        cmd_addn(76, 7);
        cmd_assignn(92, 4);
        cmd_step_size(229, 92);
        cmd_move_obj_v(229, 75, 76, 92, 131);
        jumpTo(1);
        break logicSwitch;
      case 506:
        cmd_move_obj(229, 134, 167, 4, 125);
      case 1:
        cmd_reset(123);
        cmd_set(124);
        cmd_reset(133);
      case 500:
        if (cmd_isset(130)) {
          if (!cmd_equaln(75, 70 - 11) && !cmd_equaln(76, 95 + 7)) {
            cmd_reset(130);
            cmd_decrement(92);
            cmd_step_size(229, 92);
            cmd_move_obj_v(229, 75, 76, 92, 130);
          }
        }
        if (cmd_isset(126)) {
          cmd_reset(126);
          if (!cmd_isset(195)) {
            cmd_set(195);
            cmd_increment(3);
          }
          cmd_animate_obj(254);
          cmd_load_view(93);
          cmd_set_view(254, 93);
          cmd_set_loop(254, 1);
          cmd_set_cel(254, 0);
          cmd_get_posn(93, 82, 83);
          cmd_subn(82, 2);
          cmd_decrement(83);
          cmd_position_v(254, 82, 83);
          cmd_ignore_blocks(254);
          cmd_ignore_horizon(254);
          cmd_ignore_objs(254);
          cmd_erase(229);
          cmd_draw(254);
          cmd_end_of_loop(254, 132);
          cmd_accept_input();
        }
        if (cmd_isset(195) && cmd_equaln(0, 8) && cmd_isset(132)) {
          cmd_reset(132);
          cmd_print(m1);
          jumptoLineArray = [2800];
          jumpTo(2800, 88);
          break logic;
        }
      case 2800:
        if (cmd_isset(128)) {
          cmd_reset(128);
          if (!cmd_isset(169)) {
            cmd_set(169);
            cmd_increment(3);
          }
          cmd_animate_obj(254);
          cmd_load_view(40);
          cmd_set_view(254, 40);
          cmd_set_loop(254, 0);
          cmd_set_cel(254, 0);
          cmd_get_posn(35, 82, 83);
          cmd_subn(82, 5);
          cmd_subn(83, 4);
          cmd_position_v(254, 82, 83);
          cmd_ignore_blocks(254);
          cmd_ignore_horizon(254);
          cmd_ignore_objs(254);
          cmd_erase(229);
          cmd_draw(254);
          cmd_end_of_loop(254, 132);
          cmd_accept_input();
        }
      case 2801:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(169) && cmd_equaln(0, 4) && cmd_isset(132)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(132);
              cmd_print(m2);
              jumptoLineArray = [2801, 28000];
              ifSkipArray = [true];
              jumpTo(2801, 88);
              break logic;
            case 28000:
              cmd_set_loop(254, 1);
              cmd_normal_cycle(254);
          }
        }
        if (cmd_isset(129)) {
          cmd_reset(129);
          if (!cmd_isset(175)) {
            cmd_set(175);
            cmd_increment(3);
          }
          cmd_animate_obj(57);
          cmd_ignore_blocks(57);
          cmd_ignore_horizon(57);
          cmd_ignore_objs(57);
          cmd_load_view(57);
          cmd_set_view(57, 57);
          cmd_set_loop(57, 0);
          cmd_set_cel(57, 0);
          cmd_draw(57);
          cmd_set_priority(57, 11);
          cmd_position(57, 130, 155);
          cmd_end_of_loop(57, 100);
          cmd_animate_obj(254);
          cmd_load_view(56);
          cmd_set_view(254, 56);
          cmd_set_loop(254, 0);
          cmd_set_cel(254, 0);
          cmd_assignn(82, 134);
          cmd_assignn(83, 144);
          cmd_position_v(254, 82, 83);
          cmd_ignore_blocks(254);
          cmd_ignore_horizon(254);
          cmd_erase(229);
          cmd_draw(254);
          cmd_end_of_loop(254, 132);
          cmd_set(134);
          cmd_accept_input();
          cmd_load_sound(101);
        }
        if (cmd_isset(175) && cmd_isset(134)) {
          cmd_current_cel(254, 87);
          if (!cmd_greatern(87, 13)) {
            cmd_sound(101, 147);
            cmd_shake_screen(1);
          }
        }
        if (cmd_isset(175) && cmd_equaln(0, 5) && cmd_isset(132)) {
          cmd_reset(134);
          cmd_reset(132);
          cmd_load_sound(101);
          cmd_sound(101, 147);
          cmd_shake_screen(1);
          cmd_set_loop(254, 1);
          cmd_set_cel(254, 0);
          cmd_end_of_loop(254, 100);
        }
        if (cmd_isset(130)) {
          cmd_reset(130);
          if (!cmd_isset(247)) {
            cmd_set(247);
            cmd_increment(3);
          }
          cmd_animate_obj(254);
          cmd_load_view(153);
          cmd_animate_obj(254);
          cmd_set_view(254, 153);
          cmd_set_loop(254, 1);
          cmd_set_cel(254, 31);
          cmd_assignn(91, 2);
          cmd_cycle_time(254, 91);
          cmd_position(254, 68, 98);
          cmd_ignore_blocks(254);
          cmd_ignore_horizon(254);
          cmd_erase(229);
          cmd_draw(254);
          cmd_reverse_loop(254, 132);
        }
        if (cmd_isset(247) && cmd_equaln(0, 15) && cmd_isset(132)) {
          cmd_reset(132);
          cmd_set_loop(254, 2);
          cmd_set_cel(254, 0);
          cmd_end_of_loop(254, 135);
          cmd_assignn(74, 0);
        }
        if (cmd_isset(247) && cmd_isset(135)) {
          cmd_increment(74);
        }
      case 2802:
        ifSkip = ifSkipArrayShift();
        if (
          (cmd_isset(247) && cmd_isset(135) && cmd_equaln(74, 20)) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(135);
              cmd_print(m3);
              jumptoLineArray = [2802, 28000];
              ifSkipArray = [true];
              jumpTo(2802, 88);
              break logic;
            case 28000:
              cmd_accept_input();
          }
        }
        if (!cmd_isset(127)) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_reset(127);
        if (!cmd_isset(185)) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!!cmd_isset(186)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_set(186);
        cmd_increment(3);
      case 509:
        cmd_animate_obj(254);
        cmd_load_view(67);
        cmd_set_view(254, 67);
        cmd_set_loop(254, 0);
        cmd_set_cel(254, 0);
        cmd_set_priority(254, 10);
        cmd_assignn(82, 19);
        cmd_assignn(83, 109);
        cmd_position_v(254, 82, 83);
        cmd_ignore_blocks(254);
        cmd_ignore_horizon(254);
        cmd_ignore_objs(254);
        cmd_erase(229);
        cmd_draw(254);
        cmd_end_of_loop(254, 132);
        jumpTo(2);
        break logicSwitch;
      case 508:
        cmd_print(m4);
        jumptoLineArray = [2803];
        jumpTo(2803, 88);
        break logic;
      case 2803:
        cmd_erase(229);
      case 2:
        cmd_accept_input();
      case 507:
        if (cmd_isset(186) && cmd_equaln(0, 7) && cmd_isset(132)) {
          cmd_reset(132);
          cmd_set_loop(254, 1);
          cmd_assignn(91, 2);
          cmd_cycle_time(254, 91);
          cmd_normal_cycle(254);
        }
        if (cmd_isset(131)) {
          cmd_reset(131);
          if (!cmd_isset(203)) {
            cmd_set(203);
            cmd_assignn(7, 128);
            cmd_addn(3, 64);
            cmd_set_text_attribute(10, 0);
            cmd_display(24, 31, m5);
            cmd_set_text_attribute(15, 0);
            cmd_assignv(40, 3);
            cmd_assignn(41, 21);
          }
          cmd_animate_obj(254);
          cmd_load_view(96);
          cmd_set_view(254, 96);
          cmd_set_loop(254, 0);
          cmd_set_cel(254, 0);
          cmd_set_priority(254, 9);
          cmd_assignn(82, 26);
          cmd_assignn(83, 105);
          cmd_position_v(254, 82, 83);
          cmd_ignore_blocks(254);
          cmd_ignore_horizon(254);
          cmd_ignore_objs(254);
          cmd_erase(229);
          cmd_draw(254);
          cmd_end_of_loop(254, 132);
          cmd_accept_input();
        }
        if (cmd_isset(203) && cmd_equaln(0, 9) && cmd_isset(132)) {
          cmd_reset(132);
          cmd_set_loop(254, 1);
          cmd_set_cel(254, 0);
          cmd_set_priority(254, 9);
          cmd_assignn(91, 2);
          cmd_cycle_time(254, 91);
          cmd_normal_cycle(254);
          cmd_animate_obj(253);
          cmd_set_view(253, 96);
          cmd_set_loop(253, 2);
          cmd_set_cel(253, 0);
          cmd_set_priority(253, 10);
          cmd_assignn(82, 26);
          cmd_assignn(83, 105);
          cmd_position_v(253, 82, 83);
          cmd_ignore_blocks(253);
          cmd_ignore_horizon(253);
          cmd_ignore_objs(253);
          cmd_assignn(91, 2);
          cmd_cycle_time(253, 91);
          cmd_normal_cycle(253);
          cmd_draw(253);
        }
      case 2804:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(125) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(125);
              cmd_print(m6);
              jumptoLineArray = [2804, 28000];
              ifSkipArray = [true];
              jumpTo(2804, 88);
              break logic;
            case 28000:
              cmd_accept_input();
              cmd_erase(229);
              cmd_reset(124);
          }
        }
        if (cmd_isset(133)) {
          cmd_reset(133);
          cmd_erase(254);
        }
        return;
    }
  }
};
MESSAGES[88] = [
  '',
  'There is a certain air about him.',
  "Whoa! Someone is burning for you. They're burning, they're burning, they're burning for you!",
  'Awww, this game is a romantic comedy!',
  'There is definitely something strange about that warmth resistant snowman.',
  'Score +64',
  'You see nothing out of the ordinary.',
];
