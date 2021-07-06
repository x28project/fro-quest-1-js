window.logic18 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!cmd_isset(46)) {
          cmd_set(46);
          cmd_assignn(0, 18);
          cmd_load_pic(0);
          cmd_draw_pic(0);
          cmd_discard_pic(0);
          cmd_set_horizon(0);
          cmd_status_line_off();
          cmd_prevent_input();
          cmd_program_control();
          cmd_load_view(41);
          cmd_animate_obj(41);
          cmd_set_view(41, 41);
          cmd_set_loop(41, 0);
          cmd_set_cel(41, 0);
          cmd_position(41, 32, 167);
          cmd_stop_cycling(41);
          cmd_ignore_objs(41);
          cmd_draw(41);
          cmd_load_view(26);
          cmd_animate_obj(26);
          cmd_set_view(26, 26);
          cmd_set_loop(26, 1);
          cmd_set_cel(26, 0);
          cmd_position(26, 39, 167);
          cmd_stop_cycling(26);
          cmd_ignore_objs(26);
          cmd_draw(26);
          cmd_load_view(23);
          cmd_animate_obj(23);
          cmd_set_view(23, 23);
          cmd_set_loop(23, 0);
          cmd_set_cel(23, 0);
          cmd_position(23, 32, 167);
          cmd_stop_cycling(23);
          cmd_ignore_objs(23);
          cmd_load_view(42);
          cmd_animate_obj(42);
          cmd_set_view(42, 42);
          cmd_set_loop(42, 0);
          cmd_set_cel(42, 0);
          cmd_position(42, 71, 167);
          cmd_stop_cycling(42);
          cmd_ignore_objs(42);
          cmd_assignn(100, 0);
          cmd_load_view(27);
          cmd_animate_obj(27);
          cmd_set_view(27, 27);
          cmd_set_loop(27, 0);
          cmd_set_cel(27, 0);
          cmd_set_priority(27, 13);
          cmd_position(27, 0, 101);
          cmd_stop_cycling(27);
          cmd_ignore_objs(27);
          cmd_draw(27);
          cmd_load_view(29);
          cmd_animate_obj(29);
          cmd_set_view(29, 29);
          cmd_set_loop(29, 0);
          cmd_set_cel(29, 0);
          cmd_set_priority(29, 13);
          cmd_position(29, 71, 79);
          cmd_stop_cycling(29);
          cmd_ignore_objs(29);
          cmd_fix_loop(29);
          cmd_draw(29);
          cmd_assignn(101, 0);
          cmd_assignn(102, 0);
          cmd_load_view(28);
          cmd_animate_obj(28);
          cmd_set_view(28, 28);
          cmd_set_loop(28, 0);
          cmd_set_cel(28, 0);
          cmd_set_priority(28, 14);
          cmd_position(28, 22, 87);
          cmd_stop_cycling(28);
          cmd_ignore_objs(28);
          cmd_draw(28);
          cmd_assignn(103, 0);
          cmd_set(44);
          cmd_show_pic();
        }
      case 2800:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(40) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(40);
              cmd_increment(100);
              if (cmd_equaln(100, 1)) {
                cmd_end_of_loop(41, 40);
              }
              if (cmd_equaln(100, 2)) {
                cmd_set_loop(41, 1);
                cmd_set_cel(41, 0);
                cmd_end_of_loop(41, 40);
              }
              if (cmd_equaln(100, 3)) {
                cmd_erase(41);
                cmd_erase(26);
                cmd_draw(23);
                cmd_end_of_loop(23, 40);
              }
              if (cmd_equaln(100, 4)) {
                cmd_set_loop(23, 1);
                cmd_set_cel(23, 0);
                cmd_end_of_loop(23, 40);
              }
              if (cmd_equaln(100, 5)) {
                cmd_set_loop(23, 2);
                cmd_set_cel(23, 0);
                cmd_end_of_loop(23, 40);
              }
              if (cmd_equaln(100, 6)) {
                cmd_erase(23);
                cmd_draw(42);
                cmd_end_of_loop(42, 40);
              }
              if (cmd_equaln(100, 7)) {
                cmd_set_loop(42, 1);
                cmd_set_cel(42, 0);
                cmd_end_of_loop(42, 40);
              }
              if (cmd_equaln(100, 8)) {
                cmd_set_loop(42, 2);
                cmd_set_cel(42, 0);
                cmd_assignn(91, 3);
                cmd_cycle_time(42, 91);
                cmd_end_of_loop(42, 40);
              }
              if (cmd_equaln(100, 9)) {
                cmd_set_cel(42, 5);
                cmd_reverse_loop(42, 40);
              }
              if (cmd_equaln(100, 10)) {
                cmd_set_loop(42, 1);
                cmd_set_cel(42, 11);
                cmd_assignn(91, 1);
                cmd_cycle_time(42, 91);
                cmd_reverse_loop(42, 40);
              }
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_equaln(100, 11) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_reset(15);
                    cmd_assignn(21, 20);
                    cmd_print(m1);
                    jumptoLineArray = [2800, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2800, 18);
                    break logic;
                  case 280000:
                    cmd_reset(15);
                    cmd_assignn(21, 30);
                    cmd_print(m2);
                    jumptoLineArray = [2800, 28000, 280001];
                    ifSkipArray = [true, true];
                    jumpTo(2800, 18);
                    break logic;
                  case 280001:
                    cmd_reset(15);
                    cmd_assignn(21, 15);
                    cmd_print(m3);
                    jumptoLineArray = [2800, 28000, 280002];
                    ifSkipArray = [true, true];
                    jumpTo(2800, 18);
                    break logic;
                  case 280002:
                    cmd_load_view(0);
                    cmd_set_view(42, 0);
                    cmd_set_loop(42, 0);
                    cmd_set_cel(42, 7);
                    cmd_start_cycling(42);
                    cmd_move_obj(42, 120, 140, 1, 40);
                }
              }
              if (cmd_equaln(100, 12)) {
                cmd_stop_cycling(42);
                cmd_set_loop(42, 1);
                cmd_set_cel(42, 3);
                cmd_set(40);
              }
              if (cmd_equaln(100, 13)) {
                cmd_new_room(2);
                if (AGI.break_all_logics) return;
              }
          }
        }
        if (cmd_isset(42)) {
          cmd_reset(42);
          cmd_increment(101);
          if (cmd_equaln(101, 1)) {
            cmd_end_of_loop(27, 42);
          }
          if (cmd_equaln(101, 2)) {
            cmd_set_loop(27, 1);
            cmd_set_cel(27, 0);
            cmd_end_of_loop(27, 42);
          }
          if (cmd_equaln(101, 3)) {
            cmd_set_loop(27, 2);
            cmd_set_cel(27, 0);
            cmd_end_of_loop(27, 42);
          }
          if (cmd_equaln(101, 4)) {
            cmd_erase(27);
          }
        }
        if (cmd_isset(43)) {
          cmd_reset(43);
          cmd_increment(102);
          if (cmd_equaln(102, 1)) {
            cmd_set_loop(29, 0);
            cmd_set_cel(29, 0);
            cmd_end_of_loop(29, 43);
            cmd_assignn(90, 3);
            cmd_set_dir(29, 90);
            cmd_set(45);
          }
          if (cmd_equaln(102, 2)) {
            cmd_set_loop(29, 1);
            cmd_set_cel(29, 0);
            cmd_end_of_loop(29, 43);
            cmd_assignn(90, 3);
            cmd_set_dir(29, 90);
          }
          if (cmd_equaln(102, 3)) {
            cmd_set_loop(29, 2);
            cmd_set_cel(29, 0);
            cmd_end_of_loop(29, 43);
            cmd_assignn(90, 3);
            cmd_set_dir(29, 90);
            cmd_reset(45);
          }
          if (cmd_equaln(102, 4)) {
            cmd_erase(29);
            cmd_set(40);
          }
        }
        if (cmd_isset(45)) {
          cmd_current_cel(29, 87);
          if (cmd_equaln(87, 30)) {
            cmd_stop_cycling(29);
            cmd_set_cel(29, 31);
            cmd_assignn(82, 1);
            cmd_assignn(83, 0);
            cmd_reposition(29, 82, 83);
            cmd_set(43);
          }
        }
        if (cmd_isset(44)) {
          cmd_reset(44);
          cmd_increment(103);
          if (cmd_lessn(103, 20)) {
            cmd_set(44);
          }
          if (cmd_equaln(103, 20)) {
            cmd_end_of_loop(28, 44);
          }
          if (cmd_equaln(103, 21)) {
            cmd_erase(28);
            cmd_set(42);
            cmd_set(43);
          }
        }
        return;
    }
  }
};
MESSAGES[18] = [
  '',
  "Whoa, that's a nice Fro!\n\nOf course it is.\n\nFor many years you have lathered, rinsed, and most importantly...repeated.\n\nThis has prepared you for adventure.",
  'Something is happening to the land you call home.\n\nStrange characters are all around.\n\nNo one can escape.\n\nDisaster lurks around every corner (maybe more like every other corner, give or take).\n\nSomeone must stand up (straight, stand up straight, posture is important) and set things right!',
  "It's up to you to save the day, or at least try and find something to do...",
];
CONTROLS[18] = '';
