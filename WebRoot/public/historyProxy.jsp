<%--
 captcha_proxy.jsp
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2018 Synacor, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software Foundation,
 * version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 * ***** END LICENSE BLOCK *****
--%>

<%@ page buffer="8kb" autoFlush="true" %>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%@ page session="true" %>
<%@ page import="com.zimbra.cs.taglib.ZJspSession"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>

<%-- get login history api endpoint --%>
<zm:getLoginHistoryApiUrl varHistoryApiUrl="varHistoryApiUrl"/>
<c:catch var ="catchtheException">
  <zm:getMailbox var="mailbox"/>
</c:catch>
<c:set var="mailboxName" value="${fn:escapeXml(mailbox.name)}" />
<%
  String userEmail = (String)pageContext.getAttribute("mailboxName");
	String fullHistoryApiURL = varHistoryApiUrl + "?mail="+userEmail;
%>
<c:import var="historyApiUrl" url="<%=fullHistoryApiURL%>"/>
<%
  String resp = (String)pageContext.getAttribute("historyApiUrl");
  out.println(resp);
%>
