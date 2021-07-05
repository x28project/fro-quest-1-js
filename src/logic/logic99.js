window.logic99 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (!(cmd_controller(c32))) {
  jumpTo(500);
  break;
}
  cmd_print(m1);
  cmd_assignn(255, 0);
case 1:
  get_v(255);
  if (!(cmd_lessn(255,1))) {
  jumpTo(501);
  break;
}
    cmd_increment(255);
    jumpTo(1);
break;
  case 501:
case 500:
if (cmd_controller(c31)) {
  cmd_toggle(35);
  if (!cmd_isset(35)) {
    cmd_clear_lines(24, 24, 0);
  }
}
if (cmd_controller(c29)) {
  cmd_assignn(255, 0);
  obj_status_v(255);
}
if ((cmd_said(135) || cmd_controller(c8))) {
  cmd_print(m2);
  version();
}
if (cmd_said(136, 11)) {
  cmd_call(93);
if (AGI.break_all_logics) return;
}
if (cmd_said(137, 64)) {
  cmd_set(10);
}
if ((cmd_said(138, 139) || cmd_controller(c11))) {
  show_mem();
}
if (cmd_said(140)) {
  cmd_get_num(m3, 255);
  cmd_new_room_v(255);
}
if (cmd_said(141)) {
  cmd_get_num(m4, 254);
  cmd_get_num(m5, 255);
  cmd_erase(0);
  cmd_reposition_to_v(0, 254, 255);
  cmd_draw(0);
}
if (cmd_said(138, 142)) {
  cmd_get_num(m6, 255);
  cmd_rindirect(254, 255);
  cmd_print(m7);
}
if (cmd_said(143, 142)) {
  cmd_get_num(m6, 254);
  cmd_get_num(m8, 255);
  cmd_lindirectv(254, 255);
}
if (cmd_said(138, 144)) {
  cmd_get_num(m9, 255);
  if (cmd_issetv(255)) {
    cmd_print(m10);
    jumpTo(2);
break;
  }
  cmd_print(m11);
}
case 2:
if (cmd_said(143, 144)) {
  cmd_get_num(m9, 255);
  cmd_set_v(255);
}
if (cmd_said(145, 144)) {
  cmd_get_num(m9, 255);
  cmd_reset_v(255);
}
if ((cmd_said(146) || cmd_controller(c36))) {
  cmd_get_num(m12, 255);
  obj_status_v(255);
}
if ((cmd_said(138, 147) || cmd_controller(c13))) {
  show_pri_screen();
}
if (cmd_said(50, 146)) {
  cmd_get_num(m13, 255);
  if (cmd_greatern(255,1)) {
    cmd_print(m14);
    jumpTo(3);
break;
  }
  get_v(255);
}
case 3:
if (!(cmd_said(148, 148))) {
  jumpTo(502);
  break;
}
  cmd_print(m1);
  cmd_assignn(255, 0);
case 4:
  get_v(255);
  if (!(cmd_lessn(255,1))) {
  jumpTo(503);
  break;
}
    cmd_increment(255);
    jumpTo(4);
break;
  case 503:
case 502:
if (cmd_said(146, 149)) {
  cmd_get_num(m13, 255);
  if (cmd_greatern(255,1)) {
    cmd_print(m14);
    jumpTo(5);
break;
  }
  cmd_get_room_v(255, 254);
  if (cmd_equaln(254,255)) {
    cmd_print(m15);
    jumpTo(5);
break;
  }
  cmd_print(m16);
}
case 5:
if (cmd_said(143, 147)) {
  cmd_get_num(m17, 255);
  cmd_set_priority_v(0, 255);
}
if (cmd_said(61, 147)) {
  cmd_release_priority(0);
}
if (cmd_said(150)) {
  cmd_toggle(35);
  if (!cmd_isset(35)) {
    cmd_clear_lines(24, 24, 0);
  }
}
if (cmd_isset(35)) {
  cmd_get_posn(0, 253, 254);
  cmd_get_priority(0, 255);
  cmd_set_text_attribute(6, 0);
  cmd_display(24, 15, m18);
  cmd_set_text_attribute(15, 0);
}
if (!cmd_isset(4) && cmd_isset(2) && cmd_greatern(9,0)) {
  cmd_set(4);
  if (cmd_equaln(9,1)) {
    log(m19);
  }
  if (cmd_equaln(9,2)) {
    log(m20);
  }
  if (cmd_equaln(9,3)) {
    log(m21);
  }
  if (cmd_equaln(9,4)) {
    log(m22);
  }
  if (cmd_equaln(9,5)) {
    log(m23);
  }
  if (cmd_equaln(9,6)) {
    log(m24);
  }
  if (cmd_equaln(9,7)) {
    log(m25);
  }
  if (cmd_equaln(9,8)) {
    log(m26);
  }
  cmd_print(m27);
}
if (cmd_said(151)) {
  cmd_get_string(s1, m28, 22, 0, 25);
  log(m29);
  cmd_clear_lines(22, 24, 0);
  cmd_accept_input();
}
cmd_assignn(255, 0);
return;

}}}
MESSAGES[99]=[
"",
"You gottum!",
"\n  Fro Quest 1  \n\n  Version 1_0  \n",
"new room: ",
"x: ",
"y: ",
"var number: ",
"var %v255: %v254",
"var value: ",
"flag number: ",
"flag %v255 is set",
"flag %v255 is not set",
"object #: ",
"object number: ",
"Invalid object number!",
"Object %v255 is in your inventory.",
"Object %v255 is in room %v254.",
"New priority: ",
"Rm %v0|3 Pri %v255|2 x:%v253|3 y:%v254|3",
"Unknown word: %w1",
"Unknown word: %w2",
"Unknown word: %w3",
"Unknown word: %w4",
"Unknown word: %w5",
"Unknown word: %w6",
"Unknown word: %w7",
"Unknown word: %w8",
"Logged an unknown word.",
"Error: ",
"Error: %s1"];