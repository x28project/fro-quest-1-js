window.logic94 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
case 2800:
ifSkip = ifSkipArrayShift();
        if ((!cmd_equaln(35, 255)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_program_control();
          cmd_assignn(36, 25);
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(35, 1)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m1);
jumptoLineArray = [2800, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 94);
break logic;
case 280000:
}
          }
          cmd_assignn(35, 255);
          cmd_reset(141);
}
        }
        cmd_decrement(36);
case 2801:
ifSkip = ifSkipArrayShift();
        if ((cmd_equaln(36, 1)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m2);
jumptoLineArray = [2801, 28000];
ifSkipArray = [true];
jumpTo(2801, 94);
break logic;
case 28000:
          if (!cmd_equaln(1, 12)) {
            cmd_current_view(1, 85);
            cmd_current_loop(1, 86);
            cmd_current_cel(1, 87);
            cmd_get_priority(1, 84);
            cmd_get_posn(1, 82, 83);
            cmd_assignn(89, 4);
            cmd_erase(1);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_add_to_pic_v(85, 86, 87, 82, 83, 84, 89);
          }
          if (cmd_equaln(0, 14)) {
            cmd_set(105);
            cmd_assignn(35, 0);
            jumpTo(1);
            break logicSwitch;
          }
          cmd_set(141);
}
        }
      case 1:
        cmd_call(89);
        if (AGI.break_all_logics) return;
        if (cmd_controller(c19)) {
          cmd_menu_input();
        }
        if ((cmd_controller(c2) || cmd_said(11))) {
          cmd_call(92);
          if (AGI.break_all_logics) return;
        }
        if ((cmd_controller(c5) || cmd_said(9, 8) || cmd_said(9))) {
          cmd_restore_game();
        }
        if ((cmd_controller(c7) || cmd_said(10, 8) || cmd_said(10))) {
          cmd_restart_game();
        }
        if ((cmd_controller(c10) || cmd_said(14))) {
          cmd_status();
        }
        if ((cmd_controller(c1) || cmd_said(16))) {
          cmd_stop_sound();
          cmd_quit(0);
        }
        if (cmd_controller(c6)) {
          toggle_monitor();
        }
        if (cmd_controller(c21)) {
          cmd_print(m3);
          cmd_print(m4);
jumptoLineArray = [2802];
jumpTo(2802, 94);
break logic;
        }
case 2802:
        if (cmd_controller(c16)) {
          cmd_toggle(9);
        }
        if (cmd_isset(2) && !cmd_isset(4)) {
          cmd_print(m5);
jumptoLineArray = [2803];
jumpTo(2803, 94);
break logic;
        }
case 2803:
        return;

    }
  }
}
MESSAGES[94] = [
  "",
  "You are now dead.",
  "Thank you for playing Fro Quest 1. Better luck next time!",
  "\n        Fro Quest 1\n\n        Version 1_0\n\n  Designed by X28 Project  \n\n    (C)2015 X28 Project\n    All Rights Reserved\n\n     www_x28project_com\n",
  "\n         Fro Quest\n (Original Game Soundtrack) \n\n   Remixed and Remastered   \n\n   Download available at:   \n\n     www_x28project_com     \n",
  "You are dead! You can only restore, restart, quit the game or view your inventory."
];
